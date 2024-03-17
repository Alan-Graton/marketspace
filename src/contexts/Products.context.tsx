import React from "react";

export interface IProductsContext {}

export const ProductsContext = React.createContext({} as IProductsContext);

interface IProps {
  children: React.ReactNode;
}

export function ProductsProvider({ children }: IProps) {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
}
