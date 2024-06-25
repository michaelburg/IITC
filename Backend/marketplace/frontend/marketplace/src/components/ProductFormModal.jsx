import React from "react";
import Modal from "react-modal";
import { deleteProductById, updateProduct, createProduct } from "../CRUD";

const url = "http://localhost:3000/api/product/";

Modal.setAppElement("#root");

const ProductFormModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  onDelete,
  product,
  setProduct,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product._id) {
      await updateProduct(product._id, product);
    } else {
      await createProduct(product);
    }
    onSubmit();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProductById(product._id);
    onDelete(product._id);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{product._id ? "Edit Product" : "Create Product"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </label>
        {product._id ? (
          <>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </>
        ) : (
          <button type="submit">Create Product</button>
        )}
        <button type="button" onClick={onRequestClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ProductFormModal;
