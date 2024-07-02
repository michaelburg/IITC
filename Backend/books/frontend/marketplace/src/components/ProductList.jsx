// ProductList.js
import React from "react";
import { Grid, Button } from "@mui/material";
import ProductCard from "./ProductListItem";

const ProductList = ({ productData, openModal, handleSort, sort }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button onClick={() => handleSort("name")}>
            Name {sort.column === "name" && (sort.order === "asc" ? "↑" : "↓")}
          </Button>
          <Button onClick={() => handleSort("price")}>
            Price{" "}
            {sort.column === "price" && (sort.order === "asc" ? "↑" : "↓")}
          </Button>
          <Button onClick={() => handleSort("category")}>
            Category{" "}
            {sort.column === "category" && (sort.order === "asc" ? "↑" : "↓")}
          </Button>
          <Button onClick={() => handleSort("quantity")}>
            Quantity{" "}
            {sort.column === "quantity" && (sort.order === "asc" ? "↑" : "↓")}
          </Button>
        </Grid>
        {productData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <ProductCard item={item} openModal={openModal} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
