import * as yup from "yup";

const announcementRegistrationSchema = yup.object({
  product_images: yup
    .array()
    .of(
      yup.object({
        path: yup.string(),
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
  is_active: yup.boolean().default(true),
  price: yup.string().required("Preço do Produto é obrigatório"),
  accept_trade: yup
    .boolean()
    .required("Nome do Produto é obrigatório")
    .nonNullable(),
  payment_methods: yup
    .array()
    .of(
      yup.object({
        key: yup.string(),
        name: yup.string(),
      })
    )
    .min(1, "É obrigatório selecionar ao menos um Método de Pagamento")
    .required("Método de Pagamento é obrigatório"),
});

interface IAnnouncementRegistrationSchema {
  product_images: Array<any>;
  name: string;
  description: string;
  is_new: boolean;
  is_active: boolean;
  price: string;
  accept_trade: boolean;
  payment_methods: Array<any>;
}

const DEFAULT_VALUES = {
  product_images: [],
  name: "",
  description: "",
  is_new: true,
  is_active: true,
  price: "R$0,00",
  accept_trade: false,
  payment_methods: [],
};

export {
  announcementRegistrationSchema,
  IAnnouncementRegistrationSchema,
  DEFAULT_VALUES,
};
