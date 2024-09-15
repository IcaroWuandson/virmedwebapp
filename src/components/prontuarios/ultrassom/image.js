import React, { useState, useEffect } from "react";

const Image = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const quality = 90;
      const returnUnsupportedImage = false;

      const url = `http://localhost/instances/4c41ae71-ecbfb275-941e591b-61869418-a20a47b0/rendered`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("demo:demo"),
            Accept: "image/png",
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImageUrl(imageUrl);
        } else {
          console.error("Failed to fetch image: HTTP error", response.status);
        }
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched Image" />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Image;
