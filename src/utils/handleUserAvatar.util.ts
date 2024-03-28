import { ImageSourcePropType } from "react-native";

import { api } from "@/service/api";

import { IAvatar } from "@/app/(signup)";

import defaultAvatar from "@/assets/defaultAvatar.png";

export function handleUserAvatar(avatar: IAvatar): ImageSourcePropType {
  if (avatar.selected) {
    return { uri: `${api.defaults.baseURL}/avatar/${avatar.photo.uri}` };
  }

  return defaultAvatar;
}
