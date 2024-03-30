import * as yup from "yup";

// Seria mais interessante se 'price' fosse do tipo number
const announcementRegistrationSchema = yup.object({
  name: yup.string().required("Nome do Produto é obrigatório"),
  description: yup.string().required("Descrição do Produto é obrigatório"),
  is_new: yup.boolean().required("Estado do Produto é obrigatório"),
  price: yup.string().required("Preço do Produto é obrigatório"),
  accept_trade: yup.boolean().required("Nome do Produto é obrigatório"),
  payment_methods: yup
    .array()
    .of(yup.string())
    .min(1, "É obrigatório selecionar ao menos um Método de Pagamento")
    .required("Método de Pagamento é obrigatório"),
});

interface IAnnouncementRegistrationSchema {
  name: string;
  description: string;
  is_new: boolean;
  price: string;
  accept_trade: boolean;
  payment_methods: Array<any>;
}

const DEFAULT_VALUES = {
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
