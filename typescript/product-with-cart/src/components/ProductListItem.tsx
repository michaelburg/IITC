// ProductListItem.tsx
import React from "react";
import { Product } from "../ProductContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useProducts } from "@/ProductContext";
import placeholderCart from '../images/icon-add-to-cart.svg';
import incrementIcon from '../images/icon-increment-quantity.svg';
import decrementIcon from '../images/icon-decrement-quantity.svg';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useProducts();

  return (
    <Card className="relative">
      <div className="relative">
        <img src={product.image.desktop} alt={product.name} className="w-full" />
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center items-center">
          {product.cart === 0 ? (
            <Button
              onClick={() => addToCart(product)}
              className="bg-white text-black border border-black rounded-full flex items-center"
            >
              <img src={placeholderCart} alt="Add to cart" className="mr-2" />
              Add to cart
            </Button>
          ) : (
            <Button className="bg-white text-black border border-black rounded-full flex items-center">
              <img src={decrementIcon} alt="Decrement" onClick={() => removeFromCart(product)} className="mr-2" />
              {product.cart}
              <img src={incrementIcon} alt="Increment" onClick={() => addToCart(product)} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-[10px]">{product.category}</h2>
        <h1 className="text-[16px] font-bold">{product.name}</h1>
        <h3>${product.price.toFixed(2)}</h3>
      </div>
    </Card>
  );
};

export default ProductListItem;
