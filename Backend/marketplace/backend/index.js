// index.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config(); // Load config

const PORT = process.env.PORT || 3000;

async function main() {
  await connectDB();

  app.use(express.json());

  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

  const productRoutes = require("./routes/product.route");
  const authRoutes = require("./routes/auth.route"); // Add this line

  app.use("/api/product", productRoutes);
  app.use("/api/auth", authRoutes); // Add this line

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
