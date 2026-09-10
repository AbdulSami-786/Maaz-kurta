const API_URL = "https://script.google.com/macros/s/AKfycbwccjkJYW_D5ZBB3q4QoE4J5rdHPzwRQW_iTGekEjqWbwpH31UH9infgoNiSTKFg3XJNg/exec";
const TOKEN_KEY = "kurta_token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

async function call(action, payload = {}) {
  if (!API_URL) {
    throw new Error(
      "Backend not configured. Set VITE_APPS_SCRIPT_URL in a .env file — see google-apps-script/SETUP.md."
    );
  }

  let res;
  try {
    res = await fetch(API_URL, {
      method: "POST",
      // text/plain avoids a CORS preflight that Apps Script can't answer.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, token: getToken(), ...payload }),
    });
  } catch {
    throw new Error("Couldn't reach the server. Check your internet connection and try again.");
  }

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Unexpected response from the server.");
  }

  if (!data.ok) throw new Error(data.error || "Something went wrong.");
  return data;
}

export const api = {
  signup: (name, email, password) => call("signup", { name, email, password }),
  login: (email, password) => call("login", { email, password }),
  forgotPassword: (email) => call("forgotPassword", { email }),
  resetPassword: (email, code, newPassword) => call("resetPassword", { email, code, newPassword }),

  getProfile: () => call("getProfile"),
  updateProfile: (name, phone) => call("updateProfile", { name, phone }),

  getAddresses: () => call("getAddresses"),
  addAddress: (address) => call("addAddress", { address }),
  updateAddress: (id, address) => call("updateAddress", { id, address }),
  deleteAddress: (id) => call("deleteAddress", { id }),

  getWishlist: () => call("getWishlist"),
  toggleWishlist: (productId, productInfo = {}) => call("toggleWishlist", { productId, ...productInfo }),

  placeOrder: (order) => call("placeOrder", { order }),
  getOrders: () => call("getOrders"),

  submitReview: (orderId, productId, rating, comment) => call("submitReview", { orderId, productId, rating, comment }),
  getMyReviews: () => call("getMyReviews"),
  deleteReview: (id) => call("deleteReview", { id }),
  getProductReviews: (productId) => call("getProductReviews", { productId }),
};
