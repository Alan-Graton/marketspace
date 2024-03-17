import React, { useState } from "react";
import { router } from "expo-router";

import { ScrollView, View } from "react-native";

import { useAuthContext } from "@/hooks/useAuthContext.hook";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { AppFormTexts } from "@/components/AppFormTexts";
import { AppLoader } from "@/components/AppLoader";

import { AppError } from "@/utils/AppError";

import Toast from "react-native-toast-message";

import { useForm, Controller } from "react-hook-form";
import {
  DEFAULT_VALUES,
  ILoginSchema,
  loginSchema,
} from "@/schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";

import logoPng from "@/assets/logo.png";

import { Eye, EyeClosed } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { COLORS } = useTheme();

  const { signIn, user } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleSignUpNavigation() {
    router.push("/(signup)/");
  }

  async function onSubmit(data: ILoginSchema) {
    try {
      setLoading(true);

      await signIn(data.email, data.password);

      router.push("/home/");
    } catch (error: any) {
      console.error("sign in FAILED: ", error);
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível entrar. Tente novamente mais tarde.";

      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: title,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Contanier>
      <ScrollView>
        <S.Content>
          <S.Header>
            <S.Logo source={logoPng} />
            <S.Title>marketspace</S.Title>
            <S.SubTitle>Seu lugar de compra e venda</S.SubTitle>
          </S.Header>
          <S.Body>
            <S.SubTitle>Acesse sua conta</S.SubTitle>
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
            <View>
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
              <S.PasswordIconButton
                onPress={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
              </S.PasswordIconButton>
            </View>
            <AppFormTexts errorMessage={errors.password?.message} />
            <AppLoader loading={loading} color={COLORS.BLUE} />
            {!loading && (
              <AppButton title="Acessar" onPress={handleSubmit(onSubmit)} />
            )}
          </S.Body>
          <S.Footer>
            <S.SubTitle>Ainda não tem acesso?</S.SubTitle>
            <AppButton
              title="Criar uma conta"
              type="secondary"
              onPress={() => handleSignUpNavigation()}
            />
          </S.Footer>
        </S.Content>
      </ScrollView>
    </S.Contanier>
  );
}
