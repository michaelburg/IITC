import React from "react";

const FilterForm = ({
  filterInput,
  setFilterInput,
  handleProductsPerPageChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={filterInput.name}
        onChange={(e) =>
          setFilterInput({ ...filterInput, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Category"
        value={filterInput.category}
        onChange={(e) =>
          setFilterInput({ ...filterInput, category: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Min Price"
        value={filterInput.minPrice}
        onChange={(e) =>
          setFilterInput({ ...filterInput, minPrice: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Max Price"
        value={filterInput.maxPrice}
        onChange={(e) =>
          setFilterInput({ ...filterInput, maxPrice: e.target.value })
        }
      />
      <select
        value={filterInput.productsPerPage}
        onChange={handleProductsPerPageChange}
      >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="All">All</option>
      </select>
    </form>
  );
};

export default FilterForm;
