import * as yup from "yup";

import { PaymentMethods, ProductImage } from "@/@types";

import { ProductsDTO } from "@/dtos/Products.dto";

const announcementRegistrationSchema = yup.object({
  images: yup
    .array()
    .of(
      yup.object({
        name: yup.string(),
        type: yup.string(),
        uri: yup.string(),
      })
    )
    .required("Imagens do seu produto são obrigatórias")
    .min(1, "É obrigatório enviar apenas uma imagem de seu produto")
    .max(3, "É permitido enviar até 3 imagens de seu produto"),
  name: yup.string().required("Nome do Produto é obrigatório"),
  description: yup.string().required("Descrição do Produto é obrigatório"),
  is_new: yup
    .boolean()
    .required("Estado do Produto é obrigatório")
    .nonNullable(),
  price: yup.string().required("Preço do Produto é obrigatório"),
  accept_trade: yup
    .boolean()
    .required("Nome do Produto é obrigatório")
    .nonNullable(),
  payment_methods: yup
    .array()
    .of(yup.string().required())
    // .of(yup.mixed<PaymentMethods>())
    .min(1, "É obrigatório selecionar ao menos um Método de Pagamento")
    .required("Método de Pagamento é obrigatório"),
});

interface IAnnouncementRegistrationSchema {
  images: Array<any>;
  name: string;
  description: string;
  is_new: boolean;
  price: string;
  accept_trade: boolean;
  payment_methods: Array<any>;
}

const DEFAULT_VALUES = {
  images: [],
  name: "",
  description: "",
  is_new: true,
  price: "R$0,00",
  accept_trade: false,
  payment_methods: [],
};

export {
  announcementRegistrationSchema,
  IAnnouncementRegistrationSchema,
  DEFAULT_VALUES,
};
