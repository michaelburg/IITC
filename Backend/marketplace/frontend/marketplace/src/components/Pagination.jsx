import React from "react";

const Pagination = ({ pagination, handlePreviousPage, handleNextPage }) => {
  return (
    <div>
      <button onClick={handlePreviousPage}>Back</button>
      <label>
        Page {pagination.currentPage + 1} of {pagination.totalPages}
      </label>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
