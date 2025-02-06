


import { Product } from "../../../types/product";

// Add a product to the cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    // Increment the quantity if the product already exists
    cart[existingProductIndex].quantity += 1;
  } else {
    // Add the product with an initial quantity of 1
    cart.push({ ...product, quantity: 1 });
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove a product from the cart
export const removeFromCart = (productId: string) => {
  // Get the cart from localStorage
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Filter out the product to remove
  const updatedCart = cart.filter((item) => item._id !== productId);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const productIndex = cart.findIndex((item) => item._id === productId);
  if (productIndex > -1) {
    // Update the product quantity
    cart[productIndex].quantity = quantity;

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Get all cart items
export const getCartItem = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};