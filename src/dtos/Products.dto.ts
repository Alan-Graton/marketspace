import { ProductStatus } from "@/@types";

export interface ProductsDTO {
  id: string;
  name: string;
  description: string;
  is_new: ProductStatus;
  price: number;
  accept_trade: number;
  user_id: string;
  is_active: number;
  payment_methods: Array<Array<string>>;
}
