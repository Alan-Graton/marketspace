import React from "react";
import { View, ScrollView } from "react-native";

import { Avatar } from "react-native-paper";

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
    formState: { errors },
  } = useForm<ISignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    React.useState(false);

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

  function onSubmit(data: ISignUpSchema) {
    console.log("Form Data: ", data);
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
              name="telephone"
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <AppInput
                    placeholder="Telefone"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <AppFormTexts errorMessage={errors.telephone?.message} />
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
