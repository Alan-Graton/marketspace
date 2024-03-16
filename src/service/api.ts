import axios, { AxiosError, AxiosInstance } from "axios";

export const api = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:${process.env.EXPO_PUBLIC_PORT}`,
});
