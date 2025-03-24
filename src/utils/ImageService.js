import axios from "axios";

const api_url = import.meta.env.VITE_BACKEND_URL;

export const fetchImageFromCloud = async (itemName) => {
  if (!itemName) return null;

  try {
    const response = await axios.get(
      `${api_url}/api/nutritions/search-image?name=${itemName}`
    );
    return response.data.imageUrl;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
