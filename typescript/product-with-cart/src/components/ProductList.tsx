import React from "react";
import ProductListItem from "./ProductListItem";
import { useProducts } from "@/ProductContext";

const ProductList: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
