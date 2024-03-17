import React, { useState } from "react";
import { router } from "expo-router";

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

import { handleGoBack } from "@/utils/HandleGoBack";

import avatarPng from "@/assets/defaultAvatar.png";
import logoPng from "@/assets/logo.png";

import { PencilSimpleLine, Eye, EyeClosed } from "phosphor-react-native";

import * as S from "./styles";

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

  const { signUp, user } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

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
        name: `${user.name}.${fileExtension}`.toLocaleLowerCase(),
        uri: selectedUri.uri,
        type: `${selectedUri.type}/${fileExtension}`,
      };

      console.log("AVATAR FILE: ", avatarFile);

      Toast.show({
        type: "success",
        text1: "Oba!",
        text2: "Foto de perfil selecionada com sucesso!",
      });
    }
  }

  async function onSubmit({ avatar, email, name, tel }: ISignUpSchema) {
    try {
      setLoading(true);

      // await signUp({});

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
            <S.AvatarForm>
              <Avatar.Image source={avatarPng} />
              <S.AvatarIconButton>
                <PencilSimpleLine size={16} color="white" />
              </S.AvatarIconButton>
            </S.AvatarForm>
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
