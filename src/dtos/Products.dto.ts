import { PaymentMethods, ProductImage, ProductStatus } from "@/@types";

export interface ProductsDTO {
  id: string;
  images: Array<ProductImage>;
  name: string;
  description: string;
  is_new: boolean;
  price: number;
  accept_trade: boolean;
  user_id: string;
  is_active: boolean;
  payment_methods: Array<PaymentMethods>;
}
