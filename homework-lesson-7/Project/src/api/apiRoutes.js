// це маршрути бекенду (API)
const backendUrl = import.meta.env.VITE_API_URL
// Це обєкти url потім впишем потрібні
export default {
    // getProductsByCategory: (category) => `${backendUrl}/products?category=${category}`,
    productsList: `${backendUrl}/api/products`,
    // addProduct: `${backendUrl}/products`,
    // getUpdateProductLink: (id) => `${backendUrl}/products/${id}`,
    // getProductById: (id) => `${backendUrl}/products/${id}`,
    // getDeleteProductLink: (id) => `${backendUrl}/products/${id}`,
}



