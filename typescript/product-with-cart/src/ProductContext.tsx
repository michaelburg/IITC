// ProductContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context
interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
  cart: number; // Quantity in the cart
}

interface ProductContextType {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  clearCart: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data.map(product => ({ ...product, cart: 0 })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (productToAdd: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.name === productToAdd.name
          ? { ...product, cart: product.cart + 1 }
          : product
      )
    );
  };

  const removeFromCart = (productToRemove: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.name === productToRemove.name
          ? { ...product, cart: product.cart - 1 }
          : product
      )
    );
  };

  const removeProductFromCart = (productToRemove: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.name === productToRemove.name
          ? { ...product, cart: 0 }
          : product
      )
    );
  };
  const clearCart = () => {
    setProducts(prevProducts =>
      prevProducts.map(product => ({
        ...product,
        cart: 0
      }))
    );
    console.log(products);
    
  };
  
  return (
    <ProductContext.Provider value={{ products, addToCart, removeFromCart, removeProductFromCart,clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for accessing the context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
