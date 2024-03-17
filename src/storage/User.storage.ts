import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_STORAGE } from "./Config.storage";

import { UserDTO } from "@/dtos/User.dto";

export async function UserSave(user: UserDTO): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    console.error("UserSave FAILED: ", error);
    return;
  }
}

export async function UserGet(): Promise<UserDTO | undefined> {
  try {
    const response = await AsyncStorage.getItem(USER_STORAGE);

    const user: UserDTO = response ? JSON.parse(response) : undefined;

    return user;
  } catch (error) {
    console.error("UserGet FAILED: ", error);
    return;
  }
}

export async function UserRemove(): Promise<void> {
  try {
    await AsyncStorage.removeItem(USER_STORAGE);
  } catch (error) {
    console.error("UserRemove FAILED: ", error);
    return;
  }
}
