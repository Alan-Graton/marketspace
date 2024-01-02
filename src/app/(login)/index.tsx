import React from "react";
import { router } from "expo-router";
import { ImageURISource } from "react-native";

import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  Box,
  ScrollView,
  InputIcon,
} from "@gluestack-ui/themed";

import { AppSafeAreaView } from "@/components/AppSafeAreaView";
import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  ILoginForm,
  loginSchema,
} from "@/schemas/login.schema";

import logo from "@/assets/logo.png";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: DEFAULT_VALUES,
  });

  function onSubmit({ email, password }: ILoginForm) {
    console.log("\n\n[Login] Form Data: ", { email, password });
  }

  return (
    <AppSafeAreaView
      bg="#F7F7F8"
      style={{
        flexGrow: 1,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack
          p="$12"
          bg="$gray200"
          borderBottomLeftRadius="$3xl"
          borderBottomRightRadius="$3xl"
          justifyContent="space-around"
        >
          <Center>
            <Image
              source={logo}
              defaultSource={logo as ImageURISource}
              w="$full"
              resizeMode="contain"
              alt="Marketspace Logo"
            />
            <Heading fontSize="$2xl">marketspace</Heading>
            <Text>Seu espaço de compra e venda</Text>
          </Center>

          <Center>
            <Text>Acesse sua conta</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="E-mail"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="Senha"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <AppButton
              title="Entrar"
              action="primary"
              onPress={handleSubmit(onSubmit)}
              mt="$7"
            />
          </Center>
        </VStack>
        <Box p="$12" justifyContent="center" bg="$gray100">
          <Center>
            <Text>Ainda não tem acesso?</Text>
            <AppButton
              title="Criar uma conta"
              action="secondary"
              onPress={() => {
                router.push("/(signup)/");
              }}
            />
          </Center>
        </Box>
      </ScrollView>
    </AppSafeAreaView>
  );
}
