import * as yup from "yup";

const signUpSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  telephone: yup.string().required("Telefone obrigatório"),
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
  name: string;
  email: string;
  telephone: string;
  password: string;
  password_confirmation: string;
}

const DEFAULT_VALUES = {
  name: "",
  email: "",
  telephone: "",
  password: "",
  password_confirmation: "",
};

export { signUpSchema, ISignUpSchema, DEFAULT_VALUES };
