export interface ProductsDTO {
  name: string;
  description: string;
  is_new: boolean;
  price: number;
  accept_trade: boolean;
  payment_methods: Array<Array<string>>;
}
