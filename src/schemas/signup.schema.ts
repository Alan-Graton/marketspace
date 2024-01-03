import * as yup from "yup";

const signupSchema = yup.object({
  avatar: yup.string(),
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  telephone: yup.string().required("Telefone é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter ao menos 6 caracteres"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});

interface ISignUpForm {
  avatar?: string;
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirm_password: string;
}

const DEFAULT_VALUES = {
  avatar: "",
  name: "",
  email: "",
  telephone: "",
  password: "",
  confirm_password: "",
};

export { signupSchema, ISignUpForm, DEFAULT_VALUES };
