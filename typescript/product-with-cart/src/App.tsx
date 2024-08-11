import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ProductProvider } from "./ProductContext";
import { Product } from "./ProductContext";

export default function App() {

  return (
    <ProductProvider>
      <div className="flex flex-col lg:flex-row m-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="lg:w-2/3">
          <h1 className="font-bold">Desserts</h1>
          <ProductList />
        </div>
        <div className="lg:w-1/3">
          <Cart />
        </div>
      </div>
    </ProductProvider>
  );
}
