import { PaymentMethods, ProductImage } from "@/@types";

export interface ProductsDTO {
  id?: string;
  images: Array<ProductImage>;
  name: string;
  description: string;
  is_new: boolean;
  price: string | number;
  accept_trade: boolean;
  is_active?: boolean;
  payment_methods: Array<PaymentMethods>;
}
