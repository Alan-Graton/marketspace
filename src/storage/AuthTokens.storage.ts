import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "./Config.storage";

export async function AuthTokensSave(
  token: string,
  refresh_token: string
): Promise<void> {
  try {
    const body = JSON.stringify({ token, refresh_token });

    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, body);
  } catch (error) {
    console.error("AuthTokensSave FAILED: ", error);
    return;
  }
}

export async function AuthTokensGet(): Promise<
  { token: string; refresh_token: string } | undefined
> {
  try {
    const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

    const { token, refresh_token } = response
      ? JSON.parse(response)
      : undefined;

    return { token, refresh_token };
  } catch (error) {
    console.error("AuthTokensGet FAILED: ", error);
    return;
  }
}

export async function AuthTokensRemove(): Promise<void> {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
  } catch (error) {
    console.error("AuthTokensRemove FAILED: ", error);
    return;
  }
}
