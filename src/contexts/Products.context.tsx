import React, { SetStateAction, useState } from "react";

import { api } from "@/service/api";

import { ProductsDTO } from "@/dtos/Products.dto";

export interface ProductsContext {
  products: Array<ProductsDTO>;
  setProducts: React.Dispatch<SetStateAction<Array<ProductsDTO>>>;
  userProducts: Array<ProductsDTO>;
  setUserProducts: React.Dispatch<SetStateAction<Array<ProductsDTO>>>;
  selectedProduct: ProductsDTO;
  setSelectedProduct: React.Dispatch<SetStateAction<ProductsDTO>>;
  getProducts: () => Promise<void>;
  getProductDetails: (id: string) => Promise<void>;
  getUserProducts: () => Promise<void>;
  postProducts: () => Promise<void>;
  putProducts: (id: string) => Promise<void>;
  patchProducts: (id: string) => Promise<void>;
  deleteProducts: (id: string) => Promise<void>;
}

export const ProductsContext = React.createContext({} as ProductsContext);

interface IProps {
  children: React.ReactNode;
}

export function ProductsProvider({ children }: IProps) {
  const [products, setProducts] = useState<Array<ProductsDTO>>([]);
  const [userProducts, setUserProducts] = useState<Array<ProductsDTO>>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsDTO>(
    {} as ProductsDTO
  );

  async function getProducts() {
    try {
      const { data } = await api.get("products");

      console.log("getProducts RESPONSE: ", data);

      setProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getProducts FAILED: ", error);
      throw error;
    }
  }
  async function getProductDetails(id: string) {
    try {
    } catch (error) {
      console.error("getProductDetails FAILED: ", error);
      throw error;
    }
  }
  async function getUserProducts() {
    try {
      const { data } = await api.get("users/products");

      console.log("getUserProducts RESPONSE: ", data);

      setUserProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getUserProducts FAILED: ", error);
      throw error;
    }
  }
  async function postProducts() {
    try {
    } catch (error) {
      console.error("postProducts FAILED: ", error);
      throw error;
    }
  }
  async function putProducts(id: string) {
    try {
    } catch (error) {
      console.error("putProducts FAILED: ", error);
      throw error;
    }
  }
  async function patchProducts(id: string) {
    try {
    } catch (error) {
      console.error("patchProducts FAILED: ", error);
      throw error;
    }
  }
  async function deleteProducts(id: string) {
    try {
    } catch (error) {
      console.error("deleteProducts FAILED: ", error);
      throw error;
    }
  }

  return (
    <ProductsContext.Provider
      value={{
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
        putProducts,
        patchProducts,
        deleteProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
