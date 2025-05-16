import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/products';

// Get All Products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }
};

// Add a New Product
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error.message);
  }
};

// Update a Product
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.message);
  }
};

// Delete a Product
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting product:", error.message);
    return false;
  }
};
