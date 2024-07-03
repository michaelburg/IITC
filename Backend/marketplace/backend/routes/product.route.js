// routes/robots.js
const express = require("express");
const router = express.Router();
const {
  getProductsCount,
  // getProducts,
  getFilteredProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getuserProducts,
} = require("../controllers/product.controller");
const {
  verifyToken,
  authorizeProductOwner,
} = require("../middleware/auth.middleware");

// router.get("/", getProducts);
router.get("/", getFilteredProducts);
router.get("/:id", verifyToken, getuserProducts);
router.get("/count", getProductsCount);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
