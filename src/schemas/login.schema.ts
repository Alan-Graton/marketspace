import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha inválida"),
});

interface ILoginForm {
  email: string;
  password: string;
}

const DEFAULT_VALUES = {
  email: "",
  password: "",
};

export { loginSchema, ILoginForm, DEFAULT_VALUES };
