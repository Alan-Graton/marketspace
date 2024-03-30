import React from "react";
import { router } from "expo-router";

import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { PaymentMethods } from "@/@types";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { AppFormTexts } from "@/components/AppFormTexts";

import { Switch } from "@rneui/themed";

import { handleGoBack } from "@/utils/handleGoBack.util";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  IAnnouncementRegistrationSchema,
  announcementRegistrationSchema,
} from "@/schemas/announcement_registration.schema";

import Toast from "react-native-toast-message";

import { Plus, X } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function AnnouncementRegistration() {
  const { COLORS, FONT_SIZE } = useTheme();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IAnnouncementRegistrationSchema>({
    resolver: yupResolver(announcementRegistrationSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { name, images, payment_methods } = getValues();

  console.log("Product Images: ", images);

  const handleImagesActions = useFieldArray({
    name: "images",
    control,
  });

  const handlePaymentMethodsActions = useFieldArray({
    name: "payment_methods",
    control,
  });

  const [productPrice, setProductPrice] = React.useState<number | null>(0);

  async function onAddProductImages() {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (response.canceled) {
      setValue("images", []);

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

      const fileExtension = selectedUri.uri.split(".").pop();

      const productImgFile = {
        name: "", // Vai ser atualizado após enviar o resto dos dados do form
        uri: selectedUri.uri,
        type: `${selectedUri.type}/${fileExtension}`,
      };

      handleImagesActions.append(productImgFile);
    }
  }

  function onRemoveProductImages(index: number) {
    console.log("Pressed Image index: ", index);
  }

  function onPressPaymentMethods(paymentMethodKey: PaymentMethods) {
    const includesPaymentMethods = payment_methods.includes(paymentMethodKey);

    if (!includesPaymentMethods) {
      handlePaymentMethodsActions.append(paymentMethodKey);

      return;
    }

    const removeWithIndex = payment_methods.indexOf(paymentMethodKey);

    handlePaymentMethodsActions.remove(removeWithIndex);
  }

  function onSubmit(data: IAnnouncementRegistrationSchema) {
    console.log("Announcement Registration Form Data: ", data);

    // router.push("/my_announcement_preview/");
  }

  return (
    <>
      <S.Container>
        <S.ProductImageSection>
          <View style={{ gap: 4 }}>
            <S.SectionTitle>Imagens</S.SectionTitle>
            <S.SectionSubtitle>
              Escolha até 3 imagens para mostrar o quanto o seu produto é
              incrível!
            </S.SectionSubtitle>
          </View>
          <Controller
            control={control}
            name="images"
            render={({ field: {} }) => (
              <>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  {images.map((image, index) => (
                    <View key={image.uri}>
                      <S.ProductImage source={{ uri: image.uri }} />
                      <S.ProductImageRemover
                        onPress={() => onRemoveProductImages(index)}
                      >
                        <X size={16} color="white" />
                      </S.ProductImageRemover>
                    </View>
                  ))}
                  {images.length < 3 && (
                    <S.ProductImageSelector onPress={onAddProductImages}>
                      <Plus size={24} color={COLORS.GRAY_400} />
                    </S.ProductImageSelector>
                  )}
                </View>
                <AppFormTexts errorMessage={errors.images?.message} />
              </>
            )}
          />
        </S.ProductImageSection>
        <S.ProductDetailsSection>
          <View style={{ gap: 32 }}>
            <S.AboutSection>
              <S.SectionTitle>Sobre o produto</S.SectionTitle>
              <Controller
                control={control}
                name="name"
                render={({ field: { onBlur, onChange, value } }) => (
                  <>
                    <AppInput
                      placeholder="Título do anúncio"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                    <AppFormTexts errorMessage={errors.name?.message} />
                  </>
                )}
              />
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <S.TextArea
                      placeholder="Descrição do produto"
                      multiline
                      numberOfLines={10}
                      style={{ height: 160, textAlignVertical: "top" }}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                    <AppFormTexts errorMessage={errors.description?.message} />
                  </>
                )}
              />
              <View>
                <Controller
                  control={control}
                  name="is_new"
                  render={({ field: { onBlur, value } }) => (
                    <>
                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <S.ProductStatusRadioButton
                          title="Produto novo"
                          checked={value ? true : false}
                          onBlur={onBlur}
                          onPress={() => setValue("is_new", true)}
                        />
                        <S.ProductStatusRadioButton
                          title="Produto usado"
                          checked={!value ? true : false}
                          onBlur={onBlur}
                          onPress={() => setValue("is_new", false)}
                        />
                      </View>
                      <AppFormTexts errorMessage={errors.is_new?.message} />
                    </>
                  )}
                />
              </View>
            </S.AboutSection>
            <S.SaleSection>
              <S.SectionTitle>Venda</S.SectionTitle>
              <Controller
                control={control}
                name="price"
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <S.ProductPrice
                      value={productPrice}
                      onChangeValue={setProductPrice}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      renderTextInput={(textInputProps) => (
                        <AppInput
                          placeholder="Valor do produto"
                          value={String(value)}
                          {...textInputProps}
                        />
                      )}
                    />
                    <AppFormTexts errorMessage={errors.price?.message} />
                  </>
                )}
              />
              <S.SectionTitle style={{ fontSize: FONT_SIZE.sm }}>
                Aceita troca?
              </S.SectionTitle>

              <Controller
                control={control}
                name="accept_trade"
                render={({ field: { onChange, value } }) => (
                  <Switch
                    style={{
                      alignSelf: "flex-start",
                    }}
                    value={value}
                    color={COLORS.BLUE_LIGHT}
                    onValueChange={onChange}
                  />
                )}
              />

              <View style={{ gap: 12 }}>
                <View>
                  <S.SectionTitle style={{ fontSize: FONT_SIZE.sm }}>
                    Meios de pagamento aceitos
                  </S.SectionTitle>
                </View>
                <View style={{ gap: 8 }}>
                  <Controller
                    control={control}
                    name="payment_methods"
                    render={({ field: { value } }) => (
                      <>
                        <S.PaymentMethodsCheckBox
                          title="Boleto"
                          key="boleto"
                          checked={value.includes("boleto")}
                          onPress={() => onPressPaymentMethods("boleto")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Pix"
                          key="pix"
                          checked={value.includes("pix")}
                          onPress={() => onPressPaymentMethods("pix")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Dinheiro"
                          key="cash"
                          checked={value.includes("cash")}
                          onPress={() => onPressPaymentMethods("cash")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Cartão de Crédito"
                          key="card"
                          checked={value.includes("card")}
                          onPress={() => onPressPaymentMethods("card")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Depósito Bancário"
                          key="deposit"
                          checked={value.includes("deposit")}
                          onPress={() => onPressPaymentMethods("deposit")}
                        />

                        <AppFormTexts
                          errorMessage={errors.payment_methods?.message}
                        />
                      </>
                    )}
                  />
                </View>
              </View>
            </S.SaleSection>
          </View>
        </S.ProductDetailsSection>
      </S.Container>
      <S.Footer>
        <AppButton
          title="Cancelar"
          style={{ flex: 1 }}
          type="secondary"
          onPress={handleGoBack}
        />
        <AppButton
          title="Avançar"
          style={{ flex: 1 }}
          type="ternary"
          onPress={handleSubmit(onSubmit)}
        />
      </S.Footer>
    </>
  );
}
