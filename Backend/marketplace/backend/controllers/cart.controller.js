const Cart = require("../models/cart.model");
const Product = require("../models/products.model");

async function getCart(req, res) {
  const id = req.userId; // Assuming userId is available in req.userId

  try {
    const userCart = await Cart.findOne({ user: id }).populate("cart.product");
    if (!userCart) {
      console.log(`Error while getting user cart with id: ${id}`);
      return res
        .status(404)
        .json({ message: `Error while getting user cart with id: ${id}` });
    }
    res.json(userCart);
  } catch (err) {
    if (err.name === "CastError") {
      console.log(`Error: Cart not found with id: ${id}`);
      return res.status(404).json({ message: "Cart not found" });
    }
    console.log(`Error while getting cart with id: ${id}`, err);
    res.status(500).json({ message: err.message });
  }
}

async function addToCart(req, res) {
  const productId = req.params.id; // Extract product ID from URL params
  const quantity = parseInt(req.query.amount, 10); // Extract quantity from query params
  const userId = req.userId; // Assuming userId is available in req.userId

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    // Find the product by its ID
    const productToAdd = await Product.findById(productId);
    if (!productToAdd) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find the user's cart by user ID
    let userCart = await Cart.findOne({ user: userId });
    if (!userCart) {
      // If the cart doesn't exist, create a new one
      userCart = new Cart({ user: userId, cart: [] });
    }

    // Check if the product is already in the cart
    const productInCart = userCart.cart.find(
      (item) => item.product.toString() === productId
    );
    if (productInCart) {
      // If the product is already in the cart, update the quantity
      productInCart.quantity += quantity;
    } else {
      // If the product is not in the cart, add it with the specified quantity
      userCart.cart.push({ product: productId, quantity });
    }

    // Save the updated cart
    const updatedCart = await userCart.save();
    res.status(201).json(updatedCart);
  } catch (err) {
    console.log("Error while adding product to cart", err);

    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
    } else {
      res
        .status(500)
        .json({ message: "Server error while adding product to cart" });
    }
  }
}

async function updateQuantity(req, res) {
  const { id } = req.params;
  const quantity = parseInt(req.query.amount, 10); // Extract quantity from query params
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      console.log(`Product not found with id: ${id}`);
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.log(`Error while updating product with id: ${id}`, err);

    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Server error while updating product" });
    }
  }
}

async function removeFromCart(req, res) {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const userCart = await Cart.findOne({ user: userId });
    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = userCart.cart.findIndex(
      (item) => item.product.toString() === id
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    userCart.cart.splice(productIndex, 1);
    await userCart.save();

    res.json({ message: "Product removed from cart" });
  } catch (err) {
    console.log(`Error while removing product from cart with id: ${id}`, err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getCart,
  removeFromCart,
  addToCart,
  updateQuantity,
};
