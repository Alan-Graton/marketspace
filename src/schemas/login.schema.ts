import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

interface ILoginSchema {
  email: string;
  password: string;
}

const DEFAULT_VALUES = {
  email: "",
  password: "",
};

export { loginSchema, ILoginSchema, DEFAULT_VALUES };
