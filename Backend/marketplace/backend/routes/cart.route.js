const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
} = require("../controllers/cart.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.get("/", verifyToken, getCart);
router.post("/:id", verifyToken, addToCart);
router.delete("/:id", verifyToken, removeFromCart);
router.put("/:id", verifyToken, updateQuantity);

module.exports = router;
