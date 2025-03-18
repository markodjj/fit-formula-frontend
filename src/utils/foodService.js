import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL; // Corrected variable name
const PORT = import.meta.env.VITE_PORT;
const ENV = import.meta.env.VITE_NODE_ENV;

let api_url = "";
if (ENV === "development") {
  api_url = PORT;
} else if (ENV === "prodaction") {
  api_url = API_URL;
}
// Fetch all foods
export const fetchAllFoods = async () => {
  const aj = `${api_url}/api/nutritions/`;
  try {
    const response = await axios.get(aj);
    return response.data;
  } catch (error) {
    console.error("Error fetching all food:", error);
    return [];
  }
};

// Fetch filtered foods
export const fetchFilteredFoods = async (type, searchQuery) => {
  try {
    const aj = `${api_url}/api/nutritions/`;
    console.log(type, searchQuery);
    const response = await axios.get(aj, {
      params: { type, search: searchQuery },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered food:", error);
    return [];
  }
};

export const fetchSearchedFoods = async (searchQuery) => {
  try {
    const response = await axios.get(`${api_url}/search`, {
      params: { search: searchQuery },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching searched food:", error);
    return [];
  }
};
