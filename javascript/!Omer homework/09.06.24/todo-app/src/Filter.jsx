import React, { forwardRef } from "react";

const Filter = forwardRef(({ filterTask, resetFilter }, filterRef) => {
  return (
    <>
      <input
        ref={filterRef.name}
        type="text"
        placeholder="Filter"
        onChange={filterTask}
      />
      <label>Completed</label>
      <input
        name="completeFilter"
        ref={filterRef.complete}
        type="radio"
        onClick={filterTask}
      />
      <label>not Completed</label>
      <input
        name="completeFilter"
        ref={filterRef.uncomplete}
        type="radio"
        onClick={filterTask}
      />
      <label>all</label>
      <input
        name="completeFilter"
        ref={filterRef.all}
        type="radio"
        onClick={filterTask}
      />
    </>
  );
});

export default Filter;
