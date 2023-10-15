import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  if (isNaN(price)) {
    return "Invalid Price";
  }

  const priceStr = price.toString();

  // Split the number into integer and decimal parts
  const [integerPart, decimalPart] = priceStr.split(".");

  // Format the integer part with commas for thousands
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  // Combine the integer and decimal parts, adding the currency symbol if needed
  const formattedPrice = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  // Add the Indian currency symbol, which is commonly '₹'
  return `₹${formattedPrice}`;
};
