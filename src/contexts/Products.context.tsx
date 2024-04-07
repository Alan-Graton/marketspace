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
  getProductsImages: (path: string) => Promise<any>;
  getProductDetails: (id: string) => Promise<void>;
  getUserProducts: () => Promise<void>;
  postProducts: (product: ProductsDTO) => Promise<AxiosResponse<any, any>>;
  postProductImages: (
    product_id: string,
    username: string,
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
    product_images: [],
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

      setProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function getProductsImages(path: string) {
    try {
      setLoading(true);
      const { data } = await api.get(`images/${path}`);

      return data;
    } catch (error) {
      console.error("getProductsImages FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function getProductDetails(id: string) {
    try {
      setLoading(true);

      const { data } = await api.get(`products/${id}`);

      setSelectedProduct((prevState) => (prevState = data));
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

      setUserProducts((prevState) => (prevState = data));
    } catch (error) {
      console.error("getUserProducts FAILED: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function postProducts(product: ProductsDTO) {
    try {
      setLoading(true);

      const response = await api.post("products", {
        ...product,
        payment_methods: product.payment_methods.map((el) => el.key),
      });

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
    username: string,
    images: Array<ProductImage>
  ) {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("product_id", product_id);
      images.forEach((img) => {
        formData.append("images", {
          ...img,
          name: `${username.trim()}.${img.path.trim()}`.toLocaleLowerCase(),
        });
      });

      const response = await api.post("products/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      console.error("postProductImages FAILED: ", error);
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

      await api.patch(`products/${id}`, {
        is_active: false,
      });
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
        getProductsImages,
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
