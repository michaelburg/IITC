// OrderModal.tsx
import React from "react";
import { useProducts } from "@/ProductContext";
import { Button } from "./ui/button";
import Modal from 'react-modal';
import './OrderModal.css';
import iconOrderConfirmed from '../images/icon-order-confirmed.svg'


// Set the app element for accessibility
Modal.setAppElement("#root");

interface OrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onRequestClose }) => {
    const {  clearCart } = useProducts();
    console.log('open');
    
  const { products } = useProducts();
  const cart = products.filter(product => product.cart > 0);

  const handleConfirmOrder = () => {
    clearCart()
    onRequestClose(); // Close the modal after confirming
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Your Order"
      className="modal"
      overlayClassName="modal-overlay"
    >
          <img src={iconOrderConfirmed} />
      <h2>Order Confirmed</h2>
      <h6>We hope tou enjoy your food!</h6>
          <ul >
            {cart.map((product, index) => (
              <li key={index} className="flex justify-between">
                <div className="flex">
                  <img src={product.image.thumbnail} />
                  <div >
                    <h3>{product.name}</h3>
                    <p>{product.cart}x - @${product.price.toFixed(2)}</p>
                  </div>
                    </div>
                <p>${(product.price * product.cart).toFixed(2)}</p>
              </li>
            ))}
            <li className="flex justify-between">
            <p>Order Total</p>
            <p>${cart.reduce((total, product) => total + product.price * product.cart, 0).toFixed(2)}</p>
          </li>
          <Button onClick={handleConfirmOrder}>Confirm Order</Button>
            </ul>
    </Modal>
  );
};

export default OrderModal;
