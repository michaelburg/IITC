const express = require("express");
const mysql = require("mysql2");
const app = express();

const port = 3000;

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Mb323996033",
  database: "products",
});

const db = pool.promise();

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/products/:id", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM products.product_info WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/products", async (req, res) => {
  console.log(req.body);
  const { item_name, seller_name, price, category, description } = req.body;
  try {
    await db.query(
      "INSERT INTO products.product_info (item_name, seller_name, price, category, description) VALUES (?, ?, ?, ?, ?)",
      [item_name, seller_name, price, category, description]
    );
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/products/:id", async (req, res) => {
  const { item_name, seller_name, price, category, description } = req.body;
  try {
    await db.query(
      "UPDATE product SET item_name = ?, seller_name = ?, price = ?, category = ?, description = ? WHERE id = ?",
      [item_name, seller_name, price, category, description, req.params.id]
    );
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM products.product_info WHERE id = ?", [
      req.params.id,
    ]);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
