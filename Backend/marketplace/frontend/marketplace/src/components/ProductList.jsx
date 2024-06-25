import React from "react";

const ProductList = ({ productData, openModal, handleSort, sort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>
            Name {sort.column === "name" && (sort.order === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("price")}>
            Price{" "}
            {sort.column === "price" && (sort.order === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("category")}>
            Category{" "}
            {sort.column === "category" && (sort.order === "asc" ? "↑" : "↓")}
          </th>
          <th onClick={() => handleSort("quantity")}>
            Quantity{" "}
            {sort.column === "quantity" && (sort.order === "asc" ? "↑" : "↓")}
          </th>
        </tr>
      </thead>
      <tbody>
        {productData.map((item) => (
          <tr key={item._id} onClick={() => openModal(item)}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
