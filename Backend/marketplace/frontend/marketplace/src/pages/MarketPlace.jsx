import React, { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import ProductFormModal from "../components/ProductFormModal";
import { getFilterProduct } from "../CRUD"; // Ensure this import path is correct
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

function MarketPlace() {
  const location = useLocation();
  const [productData, setProductData] = useState([]);
  const [filterInput, setFilterInput] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: "",
  });
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
    totalProducts: 0,
    productsPerPage: 5,
  });
  const [sort, setSort] = useState({
    column: "createdAt",
    order: "desc",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredProducts = await getFilterProduct(
          filterInput,
          pagination.currentPage,
          pagination.productsPerPage,
          sort.column,
          sort.order
        );
        setProductData(filteredProducts.products);
        setPagination((prevPagination) => ({
          ...prevPagination,
          totalPages: filteredProducts.totalPages,
          totalProducts: filteredProducts.totalProducts,
        }));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchData();
  }, [filterInput, pagination.currentPage, pagination.productsPerPage, sort]);

  const handlePreviousPage = () => {
    if (pagination.currentPage > 0) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage - 1,
      }));
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages - 1) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  const handleProductsPerPageChange = (e) => {
    const value =
      e.target.value === "All" ? Infinity : parseInt(e.target.value, 10);
    setPagination((prevPagination) => ({
      ...prevPagination,
      productsPerPage: value,
      currentPage: 0,
    }));
  };

  const handleSort = (column) => {
    const order =
      sort.column === column && sort.order === "asc" ? "desc" : "asc";
    setSort({ column, order });
  };

  const openModal = (
    product = { name: "", price: "", category: "", quantity: "" }
  ) => {
    setCurrentProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async () => {
    setModalIsOpen(false);
    setFilterInput({ ...filterInput });
  };

  const handleDelete = async (id) => {
    setModalIsOpen(false);
    setFilterInput({ ...filterInput });
  };

  const handleCreate = () => {
    openModal();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleCreate}
        sx={{ marginBottom: 2 }}
      >
        Create
      </Button>
      <FilterForm
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        handleProductsPerPageChange={handleProductsPerPageChange}
      />
      <ProductList
        productData={productData}
        openModal={openModal}
        handleSort={handleSort}
        sort={sort}
      />
      <Pagination
        pagination={pagination}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handleProductsPerPageChange={handleProductsPerPageChange}
      />

      <ProductFormModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSubmit={handleSubmit}
        onDelete={() => handleDelete(currentProduct._id)}
        product={currentProduct}
        setProduct={setCurrentProduct}
      />
    </div>
  );
}

export default MarketPlace;
