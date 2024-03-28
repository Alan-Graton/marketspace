import axios, { AxiosError, AxiosInstance } from "axios";

import { AppError } from "@/utils/AppError.util";

import { AuthTokensGet, AuthTokensSave } from "@/storage/AuthTokens.storage";

type SignOut = () => void;

interface APIInstanceProps extends AxiosInstance {
  registerInterceptTokenManager: (signOut: SignOut) => void;
}

interface PromiseType {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
}

export const api = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:${process.env.EXPO_PUBLIC_PORT}`,
}) as APIInstanceProps;

let failedQeue: Array<PromiseType> = [];
let isRefreshing = false;

// Esse código é disparado assim que uma request é realizada, validando o token do usuário
api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      const requestErrorMessage = requestError.response.data?.message;

      // Requisição não autorizada
      if (requestError?.response?.status === 401) {
        if (
          requestErrorMessage === "token.expired" ||
          requestErrorMessage === "token.invalid"
        ) {
          const getTokens = await AuthTokensGet();

          if (!getTokens?.refresh_token) {
            signOut();
            return Promise.reject(requestError);
          }

          // Contém as configurações da request com erro que será executada novamente
          const originalRequestConfig = requestError.config;

          // Adicionando as requisições falhas na fila de requisições
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQeue.push({
                onSuccess: (token: string) => {},
                onFailure: (error: AxiosError) => {
                  reject(error);
                },
              });
            });
          }

          isRefreshing = true;

          return new Promise(async (resolve, reject) => {
            try {
              const { data } = await api.post("sessions/refresh-token", {
                refresh_token: getTokens.refresh_token,
              });

              await AuthTokensSave(data.token, data.refresh_token);

              if (originalRequestConfig.data) {
                originalRequestConfig.data = JSON.parse(
                  originalRequestConfig.data
                );
              }

              originalRequestConfig.header = {
                Authorization: `Bearer ${data.token}`,
              };

              api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

              failedQeue.forEach((request) => {
                request.onSuccess(data.token);
              });

              resolve(api(originalRequestConfig));
            } catch (error: any) {
              failedQeue.forEach((request) => {
                request.onFailure(error);
              });

              signOut();

              reject(error);
            } finally {
              isRefreshing = false;
              failedQeue = [];
            }
          });
        }

        signOut();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(
          new AppError("Erro no servidor. Tente novamente mais tarde.")
        );
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};
