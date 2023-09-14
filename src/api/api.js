// Main API to fetch data from
const API_URL = "https://fakestoreapi.com";


// Fetch all products
export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Error GET All Products: ", error);
    }
}