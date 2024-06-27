import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ProductListItem from "./ProductListItem";

const ProductList = ({ productData, openModal, handleSort, sort }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              onClick={() => handleSort("name")}
              style={{ cursor: "pointer" }}
            >
              Name{" "}
              {sort.column === "name" && (sort.order === "asc" ? "↑" : "↓")}
            </TableCell>
            <TableCell
              onClick={() => handleSort("price")}
              style={{ cursor: "pointer" }}
            >
              Price{" "}
              {sort.column === "price" && (sort.order === "asc" ? "↑" : "↓")}
            </TableCell>
            <TableCell
              onClick={() => handleSort("category")}
              style={{ cursor: "pointer" }}
            >
              Category{" "}
              {sort.column === "category" && (sort.order === "asc" ? "↑" : "↓")}
            </TableCell>
            <TableCell
              onClick={() => handleSort("quantity")}
              style={{ cursor: "pointer" }}
            >
              Quantity{" "}
              {sort.column === "quantity" && (sort.order === "asc" ? "↑" : "↓")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productData.map((item) => (
            <ProductListItem key={item._id} item={item} openModal={openModal} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
