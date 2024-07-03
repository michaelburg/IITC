const Product = require("../models/products.model");

async function getProductsCount(req, res) {
  const name = req.query.name || "";
  try {
    const count = await Product.countDocuments({
      name: { $regex: name, $options: "i" },
    });
    res.json({ count });
  } catch (err) {
    console.log(
      "product.controller, getProductsCount. Error while getting products count",
      err
    );
    res.status(500).json({ message: err.message });
  }
}

async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      console.log(
        `product.controller, getProductById. Product not found with id: ${id}`
      );
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    if (err.name === "CastError") {
      console.log(
        `product.controller, getProductById. Product not found with id: ${id}`
      );
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(
      `product.controller, getProductById. Error while getting product with id: ${id}`,
      err
    );
    res.status(500).json({ message: err.message });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      console.log(
        `product.controller, deleteProduct. Product not found with id: ${id}`
      );
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    console.log(
      `product.controller, deleteProduct. Error while deleting product with id: ${id}`,
      err
    );
    res.status(500).json({ message: err.message });
  }
}

async function createProduct(req, res) {
  const productToAdd = req.body;
  const newProduct = new Product(productToAdd);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.log(
      "product.controller, createProduct. Error while creating product",
      err
    );

    if (err.name === "ValidationError") {
      console.log(`product.controller, createProduct. ${err.message}`);
      res.status(400).json({ message: err.message });
    } else {
      console.log(`product.controller, createProduct. ${err.message}`);
      res.status(500).json({ message: "Server error while creating product" });
    }
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, quantity, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      console.log(
        `product.controller, updateProduct. Product not found with id: ${id}`
      );
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.log(
      `product.controller, updateProduct. Error while updating product with id: ${id}`,
      err
    );

    if (err.name === "ValidationError") {
      console.log(`product.controller, updateProduct. ${err.message}`);
      res.status(400).json({ message: err.message });
    } else {
      console.log(`product.controller, updateProduct. ${err.message}`);
      res.status(500).json({ message: "Server error while updating product" });
    }
  }
}
async function getFilteredProducts(req, res) {
  const {
    name,
    minPrice,
    maxPrice,
    category,
    sortColumn,
    sortOrder,
    _id,
    not_id,
  } = req.query;
  let page = parseInt(req.query.page) || 0;
  const productsPerPage = parseInt(req.query.perPage) || Infinity;
  let filter = {};
  if (_id) {
    filter.user = _id; // Assuming userId is a valid ObjectId
  }
  if (not_id) {
    filter.user = { $ne: not_id }; // Exclude products associated with not_user
  }
  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) {
      filter.price.$gte = parseFloat(minPrice);
    }
    if (maxPrice) {
      filter.price.$lte = parseFloat(maxPrice);
    }
  }

  if (category) {
    filter.category = { $regex: category, $options: "i" };
  }

  try {
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    if (page < 0 || page >= totalPages) {
      page = 0;
    }

    const sort = {};
    if (sortColumn) {
      sort[sortColumn] = sortOrder === "desc" ? -1 : 1;
    }

    // Find products matching the filter and sort criteria
    const productsQuery = Product.find(filter)
      .sort(sort)
      .skip(productsPerPage * page)
      .limit(productsPerPage);

    // Execute products query
    const products = await productsQuery.exec();
    // Get all distinct prices matching the filter
    const distinctPrices = await Product.distinct("price", filter);

    // Get all distinct categories matching the filter
    const distinctCategories = await Product.distinct("category", filter);
    res.json({
      totalProducts,
      currentPage: page,
      totalPages,
      products,
      distinctPrices,
      distinctCategories,
    });
  } catch (err) {
    console.error("Error while getting filtered products:", err);
    res.status(500).json({ message: err.message });
  }
}
async function getuserProducts(req, res) {
  const { token } = req.query;
  let page = parseInt(req.query.page) || 0;
  const productsPerPage = parseInt(req.query.perPage) || Infinity;
  let filter = {};

  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) {
      filter.price.$gte = parseFloat(minPrice);
    }
    if (maxPrice) {
      filter.price.$lte = parseFloat(maxPrice);
    }
  }

  if (category) {
    filter.category = { $regex: category, $options: "i" };
  }

  try {
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    if (page < 0 || page >= totalPages) {
      page = 0;
    }

    const sort = {};
    if (sortColumn) {
      sort[sortColumn] = sortOrder === "desc" ? -1 : 1;
    }

    // Find products matching the filter and sort criteria
    const productsQuery = Product.find(filter)
      .sort(sort)
      .skip(productsPerPage * page)
      .limit(productsPerPage);

    // Execute products query
    const products = await productsQuery.exec();
    // Get all distinct prices matching the filter
    const distinctPrices = await Product.distinct("price", filter);

    // Get all distinct categories matching the filter
    const distinctCategories = await Product.distinct("category", filter);
    res.json({
      totalProducts,
      currentPage: page,
      totalPages,
      products,
      distinctPrices,
      distinctCategories,
    });
  } catch (err) {
    console.error("Error while getting filtered products:", err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getProductsCount,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilteredProducts,
  getuserProducts,
};
