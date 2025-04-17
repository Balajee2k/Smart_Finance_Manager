import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/savings`;
console.log('API URL:', API_URL); // Add for debugging

export const fetchSavings = async () => {
  try {
    const token = localStorage.getItem("token"); // Get user token
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching savings:", error);
    throw error;
  }
};