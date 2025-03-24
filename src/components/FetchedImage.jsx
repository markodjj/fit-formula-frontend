import { useState, useEffect } from "react";
import { fetchImageFromCloud } from "../utils/ImageService"; // Import the function

const FetchedImage = ({ itemName }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageFromCloud(itemName);
      if (url) {
        setImageUrl(url);
      } else {
        setError("Image not found");
      }
      setLoading(false);
    };

    loadImage();
  }, [itemName]);

  if (loading) return null;

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <img src={imageUrl} alt={itemName} className="logo" />
      )}
    </div>
  );
};

export default FetchedImage;
