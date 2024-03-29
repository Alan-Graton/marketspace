import { ImageSourcePropType } from "react-native";

import { api } from "@/service/api";

import { UserDTO } from "@/dtos/User.dto";

import defaultAvatar from "@/assets/defaultAvatar.png";

export function handleUserAvatar(user: UserDTO): ImageSourcePropType {
  if (user.avatar) {
    return { uri: `${api.defaults.baseURL}/images/${user.avatar}` };
  }

  return defaultAvatar;
}
