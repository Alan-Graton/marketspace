import React, { SetStateAction, useState } from "react";

import { AxiosResponse } from "axios";
import { api } from "@/service/api";

import { ProductsDTO } from "@/dtos/Products.dto";
import { ProductImage } from "@/@types";

export interface ProductsContext {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  products: Array<ProductsDTO>;
  setProducts: React.Dispatch<SetStateAction<Array<ProductsDTO>>>;
  userProducts: Array<ProductsDTO>;
  setUserProducts: React.Dispatch<SetStateAction<Array<ProductsDTO>>>;
  selectedProduct: ProductsDTO;
  setSelectedProduct: React.Dispatch<SetStateAction<ProductsDTO>>;
  getProducts: () => Promise<void>;
  getProductDetails: (id: string) => Promise<void>;
  getUserProducts: () => Promise<void>;
  postProducts: (product: ProductsDTO) => Promise<AxiosResponse<any, any>>;
  postProductImages: (
    product_id: string,
    images: Array<ProductImage>
  ) => Promise<AxiosResponse<any, any>>;
  putProducts: (id: string) => Promise<void>;
  patchProducts: (id: string) => Promise<void>;
  deleteProducts: (id: string) => Promise<void>;
}

export const ProductsContext = React.createContext({} as ProductsContext);

interface IProps {
  children: React.ReactNode;
}

export function ProductsProvider({ children }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<Array<ProductsDTO>>([]);
  const [userProducts, setUserProducts] = useState<Array<ProductsDTO>>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsDTO>({
    id: "",
    images: [],
    name: "",
    description: "",
    is_new: false,
    price: "R$00,00",
    accept_trade: false,
    is_active: false,
    payment_methods: [],
  });

  async function getProducts() {
    try {
      setLoading(true);
      const { data } = await api.get("products");

      console.log("getProducts RESPONSE: ", data);

      setProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function getProductDetails(id: string) {
    try {
      setLoading(true);
    } catch (error) {
      console.error("getProductDetails FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function getUserProducts() {
    try {
      setLoading(true);
      const { data } = await api.get("users/products");

      console.log("getUserProducts RESPONSE: ", data);

      setUserProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getUserProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  /**
   * Deverá cadastrar tanto os dados do form, quanto as imagens.
   *
   * Para o gravação das imagens será necessário uma nova requisição, e enviar apenas os dados
   * necessários para a rota de POST dos produtos
   */
  async function postProducts(product: ProductsDTO) {
    try {
      setLoading(true);

      console.log("Submiting Product announcement: ", product);

      const response = await api.post("products", product);

      return response;
    } catch (error) {
      console.error("postProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function postProductImages(
    product_id: string,
    images: Array<ProductImage>
  ) {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("product_id", product_id);
      formData.append("images", images);

      console.log("Submiting product images: ", formData);

      const response = await api.post("products/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      console.error("postProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function putProducts(id: string) {
    try {
      setLoading(true);
    } catch (error) {
      console.error("putProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function patchProducts(id: string) {
    try {
      setLoading(true);
    } catch (error) {
      console.error("patchProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function deleteProducts(id: string) {
    try {
      setLoading(true);
    } catch (error) {
      console.error("deleteProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        loading,
        setLoading,
        products,
        setProducts,
        userProducts,
        setUserProducts,
        selectedProduct,
        setSelectedProduct,
        getProducts,
        getProductDetails,
        getUserProducts,
        postProducts,
        postProductImages,
        putProducts,
        patchProducts,
        deleteProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
