import React from "react";
import { Box, TextField } from "@mui/material";

const FilterForm = ({ filterInput, setFilterInput }) => {
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
        type="number"
        sx={{ flex: 1 }}
        value={filterInput.maxPrice}
        onChange={(e) =>
          setFilterInput({ ...filterInput, maxPrice: e.target.value })
        }
      />
    </Box>
  );
};

export default FilterForm;
