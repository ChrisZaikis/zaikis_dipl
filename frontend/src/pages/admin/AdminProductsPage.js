import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";

const fetchProducts = async (abctrl) => {
    const { data } = await axios.get("/api/products/admin", {
        signal: abctrl.signal,
    })
    return data;
}

const deleteProduct = async (productId) => {
    const { data } = await axios.delete(`/api/products/admin/${productId}`);
    return data
}

const AdminProductsPage = () => {
  return <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />
};

export default AdminProductsPage;
