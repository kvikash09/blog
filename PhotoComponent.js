import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoComponent() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });
  }, []);

  if (!photoData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {photoData.map((photo) => (
        <div className="d-flex flex-wrap">
          <img src={photo.url} className="h-auto" alt={photo.thumbnailUrl} />
          <p>{photo.title}</p>
        </div>
      ))}
    </>
  );
}

export default PhotoComponent;
