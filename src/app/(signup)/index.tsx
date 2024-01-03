import React from "react";

import { ImageURISource } from "react-native";
import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  ScrollView,
  Avatar,
  AvatarImage,
  Button,
  ButtonIcon,
  Box,
} from "@gluestack-ui/themed";

import { AppSafeAreaView } from "@/components/AppSafeAreaView";
import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import { handleGoBack } from "@/utils/handleGoBack";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signupSchema,
  ISignUpForm,
  DEFAULT_VALUES,
} from "@/schemas/signup.schema";

import { PencilSimpleLine } from "phosphor-react-native";

import logo from "@/assets/logo.png";
import defaultAvatar from "@/assets/defaultAvatar.png";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(signupSchema),
    defaultValues: DEFAULT_VALUES,
  });

  function onSubmit(data: ISignUpForm) {
    console.log("\n\n[Sign Up] Form Data:", data);
  }

  return (
    <AppSafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack p="$12">
          <Center>
            <Image
              source={logo}
              defaultSource={logo as ImageURISource}
              w="$full"
              resizeMode="contain"
              alt="Application logo"
            />
            <Heading>Boas vindas!</Heading>
            <Text textAlign="center">
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>

            <HStack alignItems="baseline">
              <Avatar w="$20" h="$20">
                <AvatarImage
                  source={defaultAvatar}
                  alt="Default Avatar image"
                  w="$full"
                />
              </Avatar>
              <Box position="absolute" right="$0" bottom="$0">
                <Button w="$1" borderRadius="$full">
                  <ButtonIcon as={PencilSimpleLine} />
                </Button>
              </Box>
            </HStack>
          </Center>

          <Center>
            <Controller
              control={control}
              name="name"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="Nome"
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="E-mail"
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="telephone"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="Telefone"
                  errorMessage={errors.telephone?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="Senha"
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppInput
                  placeholder="Confirmar senha"
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <AppButton
              title="Criar"
              action="ternary"
              mt="$3.5"
              onPress={handleSubmit(onSubmit)}
            />
          </Center>

          <Center>
            <Text>Já tem uma conta?</Text>
            <AppButton
              title="Ir para o login"
              action="secondary"
              onPress={handleGoBack}
            />
          </Center>
        </VStack>
      </ScrollView>
    </AppSafeAreaView>
  );
}
