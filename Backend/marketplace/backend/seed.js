const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/products.model");
const User = require("./models/user.model");
const Cart = require("./models/cart.model");
const mongoose = require("mongoose");

dotenv.config();

const SALT_ROUNDS = 10;

const productsData = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 150,
    category: "Electronics",
  },
  {
    name: "Smartphone",
    price: 599.99,
    quantity: 75,
    category: "Electronics",
  },
  {
    name: "Laptop",
    price: 1299.99,
    quantity: 50,
    category: "Electronics",
  },
  {
    name: "Smartwatch",
    price: 199.99,
    quantity: 200,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 49.99,
    quantity: 300,
    category: "Electronics",
  },
  {
    name: "Tablet",
    price: 299.99,
    quantity: 100,
    category: "Electronics",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    quantity: 60,
    category: "Electronics",
  },
  {
    name: "Digital Camera",
    price: 499.99,
    quantity: 80,
    category: "Electronics",
  },
  {
    name: "E-reader",
    price: 129.99,
    quantity: 120,
    category: "Electronics",
  },
  {
    name: "External Hard Drive",
    price: 79.99,
    quantity: 250,
    category: "Electronics",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    quantity: 400,
    category: "Accessories",
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 150,
    category: "Accessories",
  },
  {
    name: "Fitness Tracker",
    price: 149.99,
    quantity: 180,
    category: "Wearables",
  },
  {
    name: "4K TV",
    price: 799.99,
    quantity: 40,
    category: "Electronics",
  },
  {
    name: "VR Headset",
    price: 349.99,
    quantity: 55,
    category: "Electronics",
  },
  {
    name: "Portable Charger",
    price: 24.99,
    quantity: 500,
    category: "Accessories",
  },
  {
    name: "Smart Home Hub",
    price: 99.99,
    quantity: 140,
    category: "Smart Home",
  },
  {
    name: "Electric Toothbrush",
    price: 69.99,
    quantity: 200,
    category: "Health",
  },
  {
    name: "Air Purifier",
    price: 149.99,
    quantity: 90,
    category: "Home Appliances",
  },
  {
    name: "Coffee Maker",
    price: 79.99,
    quantity: 110,
    category: "Home Appliances",
  },
  {
    name: "Instant Pot",
    price: 99.99,
    quantity: 130,
    category: "Home Appliances",
  },
  {
    name: "Robot Vacuum",
    price: 299.99,
    quantity: 70,
    category: "Home Appliances",
  },
  {
    name: "Smart Thermostat",
    price: 199.99,
    quantity: 85,
    category: "Smart Home",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 249.99,
    quantity: 65,
    category: "Electronics",
  },
  {
    name: "Dash Cam",
    price: 59.99,
    quantity: 150,
    category: "Automotive",
  },
  {
    name: "Action Camera",
    price: 199.99,
    quantity: 90,
    category: "Electronics",
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    quantity: 220,
    category: "Accessories",
  },
  {
    name: "Smart Light Bulbs",
    price: 49.99,
    quantity: 300,
    category: "Smart Home",
  },
  {
    name: "Streaming Device",
    price: 49.99,
    quantity: 180,
    category: "Electronics",
  },
  {
    name: "Home Security Camera",
    price: 129.99,
    quantity: 100,
    category: "Smart Home",
  },
];

const usersData = [
  {
    username: "omer_mazig",
    password: "1234",
    firstName: "Omer",
    lastName: "Mazig",
  },
  {
    username: "baba_bubu",
    password: "5678",
    firstName: "Baba",
    lastName: "BuBu",
  },
  {
    username: "jane_doe",
    password: "abcd",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    username: "john_smith",
    password: "efgh",
    firstName: "John",
    lastName: "Smith",
  },
  {
    username: "alice_wonderland",
    password: "ijkl",
    firstName: "Alice",
    lastName: "Wonderland",
  },
];

async function seedDB() {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    await Cart.deleteMany({});

    // Insert new users with hashed passwords
    const hashedUsers = await Promise.all(
      usersData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
        return { ...user, password: hashedPassword };
      })
    );

    const insertedUsers = await User.insertMany(hashedUsers);
    console.log("Users data seeded");

    // Create an empty cart for each user
    const carts = insertedUsers.map((user) => ({
      user: user._id,
      cart: [],
    }));

    await Cart.insertMany(carts);
    console.log("Carts initialized for each user");

    // Insert new products with user references
    const productsWithUserRefs = productsData.map((product, index) => {
      const user = insertedUsers[index % insertedUsers.length];
      return { ...product, user: user._id };
    });

    await Product.insertMany(productsWithUserRefs);
    console.log("Products data seeded");
  } catch (err) {
    console.error("Error seeding data: ", err);
  } finally {
    mongoose.connection.close().then(() => {
      console.log("Database connection closed");
    });
  }
}

seedDB();
