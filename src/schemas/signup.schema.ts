import * as yup from "yup";

const signUpSchema = yup.object({
  avatar: yup.string().required("Avatar é obrigatório"),
  // avatar: yup.object().shape({
  //   uri: yup.string().required("Avatar é obrigatório"),
  // }),
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  tel: yup.string().required("Telefone obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter ao menos 6 caracteres"),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});

interface ISignUpSchema {
  avatar: string;
  name: string;
  email: string;
  tel: string;
  password: string;
  password_confirmation: string;
}

const DEFAULT_VALUES = {
  avatar: "",
  name: "",
  email: "",
  tel: "",
  password: "",
  password_confirmation: "",
};

export { signUpSchema, ISignUpSchema, DEFAULT_VALUES };
