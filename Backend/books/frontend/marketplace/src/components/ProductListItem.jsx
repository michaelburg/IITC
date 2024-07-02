// ProductListItem.js
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";

const ProductListItem = ({ item, openModal }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          onClick={() => openModal(item)}
        >
          {item.name}
        </Typography>
        <Chip
          label={item.category}
          color="primary"
          style={{ marginTop: "8px", marginBottom: "8px" }}
        />
        <Typography variant="body2">Price: ${item.price}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">Buy now</Button>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
