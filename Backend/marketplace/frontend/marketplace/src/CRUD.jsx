const url = "http://localhost:3000/api/product/";
export async function deleteProductById(id) {
  const response = await fetch(url + id, {
    method: "DELETE",
  });
  return response.json();
}

export async function updateProduct(id, data) {
  const response = await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function createProduct(data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getFilterProduct(
  filterInput,
  currentPage,
  productsPerPage,
  sortColumn,
  sortOrder
) {
  const filterUrl = `${url}?name=${filterInput.name}&minPrice=${filterInput.minPrice}&maxPrice=${filterInput.maxPrice}&category=${filterInput.category}&page=${currentPage}&perPage=${productsPerPage}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`;
  const response = await fetch(filterUrl);
  const product = await response.json();
  return product;
}
export async function login(username, password) {
  const url = "http://localhost:3000/api/auth/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}
export async function register(username, password, firstName, lastName) {
  const url = "http://localhost:3000/api/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, firstName, lastName }),
  });
  return response.json();
}
