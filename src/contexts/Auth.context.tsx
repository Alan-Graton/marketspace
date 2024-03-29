import React, { useState, useEffect } from "react";
import { router } from "expo-router";

import { UserDTO } from "@/dtos/User.dto";

import { UserGet, UserSave, UserRemove } from "@/storage/User.storage";
import {
  AuthTokensGet,
  AuthTokensSave,
  AuthTokensRemove,
} from "@/storage/AuthTokens.storage";

import { api } from "@/service/api";

export interface IAuthContext {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: UserDTO;
  setUser: React.Dispatch<React.SetStateAction<UserDTO>>;
}

export const AuthContext = React.createContext({} as IAuthContext);

interface IProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IProps) {
  const [isFetchingUserInfo, setIsFetchingUserInfo] = useState<Boolean>(false);
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setUser(userData);
  }

  async function userAndTokenSave(
    user: UserDTO,
    token: string,
    refresh_token: string
  ) {
    try {
      setIsFetchingUserInfo(true);

      await UserSave(user);
      await AuthTokensSave(token, refresh_token);
    } catch (error: any) {
      console.error("userAndTokenSave FAILED: ", error);
      throw error;
    } finally {
      setIsFetchingUserInfo(false);
    }
  }

  async function loadUserData() {
    try {
      setIsFetchingUserInfo(true);

      const loggedUser = await UserGet();
      const getTokens = await AuthTokensGet();

      if (getTokens?.token && loggedUser) {
        userAndTokenUpdate(loggedUser, getTokens.token);
      }
    } catch (error: any) {
      console.error("loadUserData FAILED: ", error);
      throw error;
    } finally {
      setIsFetchingUserInfo(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      setIsFetchingUserInfo(true);

      const { data } = await api.post("sessions", {
        email,
        password,
      });

      if (data.user && data.token && data.refresh_token) {
        await userAndTokenSave(data.user, data.token, data.refresh_token);
        await userAndTokenUpdate(data.user, data.token);

        setUser((prevState) => (prevState = data.user));
      }
    } catch (error) {
      console.error("signIn FAILED: ", error);
      throw error;
    } finally {
      setIsFetchingUserInfo(false);
    }
  }

  async function signOut() {
    try {
      setIsFetchingUserInfo(true);

      setUser({} as UserDTO);

      await UserRemove();
      await AuthTokensRemove();

      router.push("/(login)");
    } catch (error) {
      console.error("signOut FAILED: ", error);

      throw error;
    } finally {
      setIsFetchingUserInfo(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    };
  }, [signOut]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
