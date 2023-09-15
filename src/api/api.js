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

// Login function
export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Login: ", error);
  }
}

// Register user function
export async function registerUser(newUser) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),

    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error Register User: ", error);
  }
}

