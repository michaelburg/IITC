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
  const [filteredData, setFilteredData] = useState({
    allPrices: "",
    allCategories: "",
  });
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
    totalProducts: 0,
    productsPerPage: 6,
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
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user ? user.id : "";

        const filteredProducts = await getFilterProduct(
          filterInput,
          pagination.currentPage,
          pagination.productsPerPage,
          sort.column,
          sort.order,
          "",
          userId
        );
        setProductData(filteredProducts.products);
        setPagination((prevPagination) => ({
          ...prevPagination,
          totalPages:
            filteredProducts.totalPages === 0 ? 1 : filteredProducts.totalPages,
          totalProducts: filteredProducts.totalProducts,
        }));
        setFilteredData({
          allCategories: filteredProducts.distinctCategories,
          allPrices: filteredProducts.distinctPrices,
        });
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
    console.log(e);
    const value = e === "All" ? "All" : parseInt(e, 10);
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

  return (
    <div>
      <FilterForm
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        filteredData={filteredData}
      />
      <ProductList
        productData={productData}
        openModal={openModal}
        handleSort={handleSort}
        sort={sort}
        page={"market"}
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
