const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Products = require("./models/products.model");
const User = require("./models/user.model");

dotenv.config();

const SALT_ROUNDS = 10;

const productsData = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 150,
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise-canceling features.",
  },
  {
    name: "Smartphone",
    price: 599.99,
    quantity: 75,
    category: "Electronics",
    description:
      "Latest model smartphone with high-resolution display and fast processor.",
  },
  {
    name: "Laptop",
    price: 1299.99,
    quantity: 50,
    category: "Electronics",
    description: "Powerful laptop with 16GB RAM and 512GB SSD.",
  },
  {
    name: "Smartwatch",
    price: 199.99,
    quantity: 200,
    category: "Electronics",
    description: "Smartwatch with fitness tracking and heart rate monitoring.",
  },
  {
    name: "Bluetooth Speaker",
    price: 49.99,
    quantity: 300,
    category: "Electronics",
    description: "Portable Bluetooth speaker with excellent sound quality.",
  },
  {
    name: "Tablet",
    price: 299.99,
    quantity: 100,
    category: "Electronics",
    description: "10-inch tablet with 64GB storage and long battery life.",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    quantity: 60,
    category: "Electronics",
    description: "Next-gen gaming console with 4K support.",
  },
  {
    name: "Digital Camera",
    price: 499.99,
    quantity: 80,
    category: "Electronics",
    description: "Digital camera with 20MP sensor and 4K video recording.",
  },
  {
    name: "E-reader",
    price: 129.99,
    quantity: 120,
    category: "Electronics",
    description:
      "E-reader with high-resolution display and adjustable backlight.",
  },
  {
    name: "External Hard Drive",
    price: 79.99,
    quantity: 250,
    category: "Electronics",
    description: "1TB external hard drive with USB 3.0 connectivity.",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    quantity: 400,
    category: "Accessories",
    description: "Ergonomic wireless mouse with high precision.",
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 150,
    category: "Accessories",
    description: "Mechanical keyboard with customizable RGB lighting.",
  },
  {
    name: "Fitness Tracker",
    price: 149.99,
    quantity: 180,
    category: "Wearables",
    description: "Fitness tracker with GPS and heart rate monitor.",
  },
  {
    name: "4K TV",
    price: 799.99,
    quantity: 40,
    category: "Electronics",
    description: "55-inch 4K TV with HDR support.",
  },
  {
    name: "VR Headset",
    price: 349.99,
    quantity: 55,
    category: "Electronics",
    description: "Virtual reality headset with immersive experience.",
  },
  {
    name: "Portable Charger",
    price: 24.99,
    quantity: 500,
    category: "Accessories",
    description: "Portable charger with 10000mAh capacity.",
  },
  {
    name: "Smart Home Hub",
    price: 99.99,
    quantity: 140,
    category: "Smart Home",
    description: "Smart home hub with voice assistant support.",
  },
  {
    name: "Electric Toothbrush",
    price: 69.99,
    quantity: 200,
    category: "Health",
    description: "Electric toothbrush with multiple brushing modes.",
  },
  {
    name: "Air Purifier",
    price: 149.99,
    quantity: 90,
    category: "Home Appliances",
    description: "Air purifier with HEPA filter and quiet operation.",
  },
  {
    name: "Coffee Maker",
    price: 79.99,
    quantity: 110,
    category: "Home Appliances",
    description:
      "Coffee maker with programmable timer and multiple brew settings.",
  },
  {
    name: "Instant Pot",
    price: 99.99,
    quantity: 130,
    category: "Home Appliances",
    description:
      "Multifunctional Instant Pot with pressure cooking and slow cooking options.",
  },
  {
    name: "Robot Vacuum",
    price: 299.99,
    quantity: 70,
    category: "Home Appliances",
    description: "Robot vacuum with smart mapping and powerful suction.",
  },
  {
    name: "Smart Thermostat",
    price: 199.99,
    quantity: 85,
    category: "Smart Home",
    description:
      "Smart thermostat with remote control and energy-saving features.",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 249.99,
    quantity: 65,
    category: "Electronics",
    description:
      "Premium noise-cancelling headphones with high-fidelity sound.",
  },
  {
    name: "Dash Cam",
    price: 59.99,
    quantity: 150,
    category: "Automotive",
    description: "Dash cam with full HD recording and night vision.",
  },
  {
    name: "Action Camera",
    price: 199.99,
    quantity: 90,
    category: "Electronics",
    description: "Action camera with waterproof casing and 4K recording.",
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    quantity: 220,
    category: "Accessories",
    description:
      "Fast wireless charger with compatibility for various devices.",
  },
  {
    name: "Smart Light Bulbs",
    price: 49.99,
    quantity: 300,
    category: "Smart Home",
    description:
      "Smart light bulbs with color-changing and remote control features.",
  },
  {
    name: "Streaming Device",
    price: 49.99,
    quantity: 180,
    category: "Electronics",
    description:
      "Streaming device with 4K support and multiple streaming apps.",
  },
  {
    name: "Home Security Camera",
    price: 129.99,
    quantity: 100,
    category: "Smart Home",
    description: "Home security camera with motion detection and night vision.",
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
];

async function seedDB() {
  await connectDB();
  try {
    // Clear existing data
    await Products.deleteMany({});
    await User.deleteMany({});

    // Insert new users with hashed passwords
    const hashedUsers = await Promise.all(
      usersData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
        return { ...user, password: hashedPassword };
      })
    );
    const insertedUsers = await User.insertMany(hashedUsers);
    console.log("Users data seeded");

    // Insert new products with user references
    const productsWithUserRefs = productsData.map((product, index) => {
      // Assign each product to a user in a round-robin fashion
      const user = insertedUsers[index % insertedUsers.length];
      return { ...product, user: user._id };
    });
    await Products.insertMany(productsWithUserRefs);
    console.log("Products data seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
