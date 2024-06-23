import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Chip,
} from "@mui/material";

const Filter = ({
  filterText,
  setFilterText,
  filterStatus,
  setFilterStatus,
  filterTask,
  categories,
  categoryFilter,
}) => {
  const handleTextChange = (event) => {
    setFilterText(event.target.value);
    filterTask();
  };

  const handleStatusChange = (event) => {
    setFilterStatus(event.target.value);
    filterTask();
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        value={filterText}
        onChange={handleTextChange}
      />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={filterStatus}
          onChange={handleStatusChange}
        >
          <FormControlLabel
            value="Completed"
            control={<Radio />}
            label="Completed"
          />
          <FormControlLabel
            value="Not Completed"
            control={<Radio />}
            label="Not Completed"
          />
          <FormControlLabel value="All" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
      <br />
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.id}
          variant={category.selected ? "filled" : "outlined"}
          onClick={() => categoryFilter(category.id)}
        />
      ))}
    </>
  );
};

export default Filter;
