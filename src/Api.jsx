import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://short-xish.onrender.com", // Replace with the correct API base URL
});

// Create a shortened URL
export const createShortUrl = async (destination) => {
  try {
    const response = await apiClient.post("/url", { destination });
    console.log(response.data.newUrl);
    return response.data.newUrl; // Returns { shortId, destination }
  } catch (error) {
    console.log(error);
    throw error.response?.data || { message: "An error occurred" };
  }
};

// Retrieve a destination URL by shortId
export const getDestinationUrl = async (shortId) => {
  try {
    const response = await apiClient.get(`/url/${shortId}`);
    return response.data.destination; // Returns the destination URL
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
