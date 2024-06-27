import React from "react";
import { TableRow, TableCell } from "@mui/material";

const ProductListItem = ({ item, openModal }) => {
  return (
    <TableRow hover onClick={() => openModal(item)}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.quantity}</TableCell>
    </TableRow>
  );
};

export default ProductListItem;
