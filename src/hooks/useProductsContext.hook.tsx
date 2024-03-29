import React from "react";

import { ProductsContext } from "@/contexts/Products.context";

export function useProductsContext(): ProductsContext {
  const context = React.useContext(ProductsContext);

  return context;
}
