import React, { useState } from "react";
import { router } from "expo-router";

import { api } from "@/service/api";

import { View, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Avatar } from "react-native-paper";

import Toast from "react-native-toast-message";

import { useAuthContext } from "@/hooks/useAuthContext.hook";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { AppFormTexts } from "@/components/AppFormTexts";

import { useForm, Controller } from "react-hook-form";
import {
  DEFAULT_VALUES,
  ISignUpSchema,
  signUpSchema,
} from "@/schemas/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";

import { handleGoBack } from "@/utils/handleGoBack.util";

import logoPng from "@/assets/logo.png";
import defaultAvatar from "@/assets/defaultAvatar.png";

import { PencilSimpleLine, Eye, EyeClosed } from "phosphor-react-native";

import * as S from "./styles";

export interface IAvatar {
  selected: boolean;
  photo: {
    uri: string;
    name: string;
    type: string;
  };
}

const AVATAR_DEFAULT_VALUE = {
  selected: false,
  photo: {
    uri: "",
    name: "",
    type: "",
  },
} as IAvatar;

export default function SignUp() {
  const {
    control,
    handleSubmit,
    setValue, // Usado para atribuir valores aos campos do Schema manualmente
    formState: { errors },
  } = useForm<ISignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { signIn } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [selectedAvatar, setSelectedAvatar] =
    useState<IAvatar>(AVATAR_DEFAULT_VALUE);

  function handlePasswordIcon(
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return (
      <S.PasswordIconButton onPress={() => setState(!state)}>
        {!state ? <Eye size={24} /> : <EyeClosed size={24} />}
      </S.PasswordIconButton>
    );
  }

  React.useLayoutEffect(() => {
    setSelectedAvatar({} as IAvatar);
  }, []);

  async function handleCaptureImage() {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (response.canceled) {
      setValue("avatar", "");

      return;
    }

    const selectedUri = response.assets[0];

    if (selectedUri) {
      if (selectedUri.fileSize && selectedUri.fileSize / 1024 / 1024 > 5) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: "Essa imagem é muito grande. Escolha uma de até 5MB",
        });
        return;
      }

      setValue("avatar", selectedUri.uri);

      const fileExtension = selectedUri.uri.split(".").pop();

      const avatarFile = {
        name: "",
        uri: selectedUri.uri,
        type: `${selectedUri.type}/${fileExtension}`,
      };

      setSelectedAvatar({ selected: true, photo: { ...avatarFile } });

      Toast.show({
        type: "success",
        text1: "Oba!",
        text2: "Foto de perfil selecionada com sucesso!",
      });
    }
  }

  const handleSignUpAvatar = (selectedAvatar: IAvatar) => {
    if (selectedAvatar.selected) {
      return {
        uri: selectedAvatar.photo.uri,
      };
    }

    return defaultAvatar;
  };

  async function onSubmit({ email, name, password, tel }: ISignUpSchema) {
    try {
      setLoading(true);

      const formData = new FormData();

      const fileType = selectedAvatar.photo.type.split("/")[1];

      const avatarForm = {
        ...selectedAvatar.photo,
        name: `${name}.${fileType}`.toLowerCase(),
      };

      formData.append("name", name);
      formData.append("email", email);
      formData.append("tel", tel);
      formData.append("password", password);
      formData.append("avatar", avatarForm);

      await api.post("users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await signIn(email, name);

      router.push("/(tabs)/home");
    } catch (error) {
      console.error("sign up FAILED: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Contanier>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Content>
          <S.Header>
            <S.Logo source={logoPng} />
            <S.Title>Boas vindas!</S.Title>
            <S.SubTitle>
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </S.SubTitle>
          </S.Header>
          <S.Body>
            <Controller
              control={control}
              name="avatar"
              render={() => (
                <View style={{ alignItems: "center", gap: 8 }}>
                  <S.AvatarForm>
                    <Avatar.Image
                      source={handleSignUpAvatar(selectedAvatar)}
                      size={88}
                    />
                    <S.AvatarIconButton onPress={handleCaptureImage}>
                      <PencilSimpleLine size={16} color="white" />
                    </S.AvatarIconButton>
                  </S.AvatarForm>
                  <AppFormTexts errorMessage={errors.avatar?.message} />
                </View>
              )}
            />
            <Controller
              control={control}
              name="name"
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <AppInput
                    placeholder="Nome"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <AppFormTexts errorMessage={errors.name?.message} />
                </>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <AppInput
                    placeholder="E-mail"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <AppFormTexts errorMessage={errors.email?.message} />
                </>
              )}
            />
            <Controller
              control={control}
              name="tel"
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <AppInput
                    placeholder="Telefone"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxLength={9}
                    keyboardType="numeric"
                  />
                  <AppFormTexts errorMessage={errors.tel?.message} />
                </>
              )}
            />
            <View style={{ alignItems: "center" }}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onBlur, onChange, value } }) => (
                  <AppInput
                    placeholder="Senha"
                    secureTextEntry={!showPassword}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {handlePasswordIcon(showPassword, setShowPassword)}
            </View>
            <AppFormTexts errorMessage={errors.password?.message} />
            <View style={{ alignItems: "center" }}>
              <Controller
                control={control}
                name="password_confirmation"
                render={({ field: { onBlur, onChange, value } }) => (
                  <AppInput
                    placeholder="Confirmar Senha"
                    secureTextEntry={!showPasswordConfirmation}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {handlePasswordIcon(
                showPasswordConfirmation,
                setShowPasswordConfirmation
              )}
            </View>
            <AppFormTexts
              errorMessage={errors.password_confirmation?.message}
            />
            <AppButton
              title="Criar"
              type="ternary"
              onPress={handleSubmit(onSubmit)}
              loading={loading}
            />
          </S.Body>
          <S.Footer>
            <S.SubTitle>Já tem uma conta?</S.SubTitle>
            <AppButton
              title="Ir para o login"
              type="secondary"
              onPress={() => handleGoBack()}
            />
          </S.Footer>
        </S.Content>
      </ScrollView>
    </S.Contanier>
  );
}
