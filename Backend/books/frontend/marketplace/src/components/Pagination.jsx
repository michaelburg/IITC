import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Pagination = ({
  pagination,
  handlePreviousPage,
  handleNextPage,
  handleProductsPerPageChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <Button
        variant="contained"
        onClick={handlePreviousPage}
        disabled={pagination.currentPage === 0}
      >
        Previous
      </Button>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="label"
          sx={{ fontWeight: "bold" }}
        >
          Page {pagination.currentPage + 1} of {pagination.totalPages}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={handleNextPage}
        disabled={pagination.currentPage === pagination.totalPages - 1}
      >
        Next
      </Button>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Per Page</InputLabel>
        <Select
          value={pagination.productsPerPage}
          onChange={(e) => handleProductsPerPageChange(e.target.value)}
          label="Per Page"
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={"All"}>All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Pagination;
