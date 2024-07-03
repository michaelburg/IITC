import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function ProductListItem({ item, openModal, page }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Price: ${item.price}</Typography>
        <Typography variant="body2">Category: {item.category}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        {page === "profile" ? (
          <Button variant="contained" onClick={() => openModal(item)}>
            Edit
          </Button>
        ) : item.quantity === 0 ? (
          <Typography variant="body2" color="error">
            Sold Out
          </Typography>
        ) : (
          <>
            <Button variant="contained">Buy Now</Button>
            <Button variant="contained">Add to Cart</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductListItem;
