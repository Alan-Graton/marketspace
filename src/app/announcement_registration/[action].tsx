import React from "react";
import { router } from "expo-router";

import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { PaymentMethods } from "@/@types";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

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

import { api } from "@/service/api";
// Seria melhor usar a DTO como tipagem para o todo esse schema
import { ProductsDTO } from "@/dtos/Products.dto";

import Toast from "react-native-toast-message";

import { Plus, X } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function AnnouncementRegistration() {
  const { COLORS, FONT_SIZE } = useTheme();

  const { selectedProduct, setSelectedProduct } = useProductsContext();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<IAnnouncementRegistrationSchema>(
      announcementRegistrationSchema
    ),
    defaultValues: selectedProduct.name
      ? (selectedProduct as unknown as typeof DEFAULT_VALUES)
      : DEFAULT_VALUES,
  });

  const { product_images, payment_methods } = getValues();

  const handleImagesActions = useFieldArray({
    name: "product_images",
    control,
  });

  const handlePaymentMethodsActions = useFieldArray({
    name: "payment_methods",
    control,
  });

  const [loading, setLoading] = React.useState<boolean>(false);
  const [productPrice, setProductPrice] = React.useState<number | null>(
    Number(
      String(selectedProduct.price)
        ?.split(" ")[1]
        ?.replaceAll(".", "")
        ?.replaceAll(",", ".")
    ) || null
  );

  async function onAddProductImages() {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (response.canceled) {
      setValue("product_images", []);

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
        path: "", // Vai ser atualizado após enviar o resto dos dados do form
        uri: selectedUri.uri,
        type: `${selectedUri.type}/${fileExtension}`,
      };

      handleImagesActions.append(productImgFile);
    }
  }

  function onPressPaymentMethods(paymentMethodKey: PaymentMethods) {
    const handlePaymentMethods = {
      boleto: { key: paymentMethodKey, name: "Boleto" },
      pix: { key: paymentMethodKey, name: "Pix" },
      cash: { key: paymentMethodKey, name: "Dinheiro" },
      deposit: { key: paymentMethodKey, name: "Depósito Bancário" },
      card: { key: paymentMethodKey, name: "Cartão" },
    };

    const includesPaymentMethods = payment_methods.find(
      (el) => el.key === paymentMethodKey
    );

    if (!includesPaymentMethods) {
      handlePaymentMethodsActions.append(
        handlePaymentMethods[paymentMethodKey]
      );

      return;
    }

    const removeWithIndex = payment_methods.findIndex(
      (el) => el.key === paymentMethodKey
    );

    handlePaymentMethodsActions.remove(removeWithIndex);
  }

  function onSubmit(data: any) {
    const payload = data as ProductsDTO;

    setLoading(true);

    payload.product_images.forEach((image, index) => {
      if (image.path) return;

      handleImagesActions.update(index, {
        ...image,
        path: payload["name"].trim(),
      });
    });

    setSelectedProduct((prevState) => (prevState = payload));
    setLoading(false);

    // Exibir dados através de params da rota ao invés de usar o "selectedProduct"
    // TODO: Usar URL params para indicar qual ação executar ao pressionar em 'Publicar'
    router.push("/my_announcement_preview/");
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
            name="product_images"
            render={({ field: {} }) => (
              <>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  {product_images.map((image, index) => (
                    <View key={image.uri || image.id}>
                      <S.ProductImage
                        source={{
                          uri:
                            image.uri ||
                            `${api.defaults.baseURL}/images/${image.path}`,
                        }}
                      />
                      <S.ProductImageRemover
                        onPress={() => handleImagesActions.remove(index)}
                      >
                        <X size={12} color={COLORS.GRAY_700} />
                      </S.ProductImageRemover>
                    </View>
                  ))}
                  {product_images.length < 3 && (
                    <S.ProductImageSelector onPress={onAddProductImages}>
                      <Plus size={24} color={COLORS.GRAY_400} />
                    </S.ProductImageSelector>
                  )}
                </View>
                <AppFormTexts errorMessage={errors.product_images?.message} />
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
                          checked={
                            value?.find((el) => el.key === "boleto") !==
                            undefined
                          }
                          onPress={() => onPressPaymentMethods("boleto")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Pix"
                          key="pix"
                          checked={
                            value?.find((el) => el.key === "pix") !== undefined
                          }
                          onPress={() => onPressPaymentMethods("pix")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Dinheiro"
                          key="cash"
                          checked={
                            value?.find((el) => el.key === "cash") !== undefined
                          }
                          onPress={() => onPressPaymentMethods("cash")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Cartão de Crédito"
                          key="card"
                          checked={
                            value?.find((el) => el.key === "card") !== undefined
                          }
                          onPress={() => onPressPaymentMethods("card")}
                        />
                        <S.PaymentMethodsCheckBox
                          title="Depósito Bancário"
                          key="deposit"
                          checked={
                            value?.find((el) => el.key === "deposit") !==
                            undefined
                          }
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
          loading={loading}
          onPress={handleSubmit(onSubmit)}
        />
      </S.Footer>
    </>
  );
}
