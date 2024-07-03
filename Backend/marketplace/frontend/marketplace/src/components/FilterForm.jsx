import React from "react";
import { Box, TextField } from "@mui/material";

const FilterForm = ({ filterInput, setFilterInput, filteredData }) => {
  const handleKeyDown = (e) => {
    if (
      e.key !== "Backspace" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Delete" &&
      (e.key < "0" || e.key > "9") &&
      (e.key !== "." || e.target.value.includes("."))
    ) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d*$/;

    if (regex.test(value)) {
      setFilterInput({ ...filterInput, maxPrice: value });
    }
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        margin: "auto",
        marginBottom: 2,
        backgroundColor: "background.paper",
        borderRadius: 1,
        boxShadow: 1,
        maxWidth: "500px",
        width: "100%",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        sx={{ flex: 1 }}
        value={filterInput.name}
        onChange={(e) =>
          setFilterInput({ ...filterInput, name: e.target.value })
        }
      />
      <TextField
        label="Category"
        variant="outlined"
        sx={{ flex: 1 }}
        value={filterInput.category}
        onChange={(e) =>
          setFilterInput({ ...filterInput, category: e.target.value })
        }
      />
      <TextField
        label="Min Price"
        variant="outlined"
        type="number"
        sx={{ flex: 1 }}
        value={filterInput.minPrice}
        onChange={(e) =>
          setFilterInput({ ...filterInput, minPrice: e.target.value })
        }
      />
      <TextField
        label="Max Price"
        variant="outlined"
        type="text"
        sx={{ flex: 1 }}
        value={filterInput.maxPrice}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default FilterForm;
