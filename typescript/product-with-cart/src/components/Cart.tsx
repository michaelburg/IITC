// Cart.tsx
import React, { useState } from "react";
import { Card } from "./ui/card";
import { useProducts } from "@/ProductContext";
import { Button } from "./ui/button";
import OrderModal from "./OrderModal";
import CarbonIcon from '../images/icon-carbon-neutral.svg'
import removeIcon from '../images/icon-remove-item.svg'
import emptyCartIcon from '../images/illustration-empty-cart.svg'

export default function Cart() {
  const { products, removeProductFromCart } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = products.filter(product => product.cart > 0);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card>
        <h2>Your Cart ({cart.length})</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  <h1>{product.name}</h1>
                  <p>{product.cart}x</p>
                  <p>${product.price.toFixed(2)}</p>
                  <p>${(product.price * product.cart).toFixed(2)}</p>
                  <img src={removeIcon} onClick={(e) => {
                    e.preventDefault(); 
                    removeProductFromCart(product);
                  }}/>
                  
                </li>
              ))}
            </ul>
            <p>Total Order</p>
            <p>${cart.reduce((total, product) => total + product.price * product.cart, 0).toFixed(2)}</p>
<p>
<img src={CarbonIcon} />
  This is carbon natural delivery</p>
            <Button onClick={handleConfirmOrder}>Confirm Order</Button>
          </>
        ) : (
          <>
          <img src={emptyCartIcon} />
          <p>Your added items will appear here.</p>
          </>
        )}
      </Card>
      <OrderModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
