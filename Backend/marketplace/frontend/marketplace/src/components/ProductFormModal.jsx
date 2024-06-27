import React from "react";
import Modal from "react-modal";
import { TextField, Button, Box, Typography } from "@mui/material";
import { deleteProductById, updateProduct, createProduct } from "../CRUD";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          {product._id ? "Edit Product" : "Create Product"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            name="price"
            value={product.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Category"
            variant="outlined"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Quantity"
            type="number"
            variant="outlined"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            fullWidth
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" type="submit">
              {product._id ? "Save Changes" : "Create Product"}
            </Button>
            {product._id && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
            <Button variant="outlined" color="inherit" onClick={onRequestClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductFormModal;
