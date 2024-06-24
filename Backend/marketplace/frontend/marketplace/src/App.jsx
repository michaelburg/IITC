import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/api/product/";

async function getProducts() {
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

async function getProductById(id) {
  const response = await fetch(url + id);
  const product = await response.json();
  return product;
}

async function deleteProductById(id) {
  const response = await fetch(url + id, {
    method: "DELETE",
  });
  return response.json();
}

async function createProduct(data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function updateProduct(id, data) {
  const response = await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function App() {
  const [productData, setProductData] = useState([]);
  const [productInput, setProductInput] = useState({
    _id: "",
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setProductData(products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchData();
  }, []);

  async function showDetails(_id) {
    try {
      const product = await getProductById(_id);
      setProductInput(product);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  async function searchProduct() {
    try {
      const product = await getProductById(productInput._id);
      setProductData([product]);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  async function deleteProduct() {
    try {
      await deleteProductById(productInput._id);
      setProductData(
        productData.filter((item) => item._id !== productInput._id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  async function createProductHandler() {
    try {
      const newProduct = await createProduct(productInput);
      setProductData([...productData, newProduct]);
      setProductInput({
        _id: "",
        name: "",
        price: "",
        category: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  async function editProduct() {
    try {
      const updatedProduct = await updateProduct(
        productInput._id,
        productInput
      );
      setProductData(
        productData.map((item) =>
          item._id === updatedProduct._id ? updatedProduct : item
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="_id"
          value={productInput._id}
          onChange={(e) =>
            setProductInput({ ...productInput, _id: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="name"
          value={productInput.name}
          onChange={(e) =>
            setProductInput({ ...productInput, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="price"
          value={productInput.price}
          onChange={(e) =>
            setProductInput({ ...productInput, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="category"
          value={productInput.category}
          onChange={(e) =>
            setProductInput({ ...productInput, category: e.target.value })
          }
        />
      </form>

      <button onClick={searchProduct}>search</button>
      <button onClick={deleteProduct}>delete</button>
      <button onClick={createProductHandler}>create</button>
      <button onClick={editProduct}>edit</button>

      <table>
        <thead>
          <tr>
            <th>_ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td onClick={() => showDetails(item._id)}>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
