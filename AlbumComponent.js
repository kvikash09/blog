import React, { useState, useEffect } from "react";
import axios from "axios";

function AlbumComponent() {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbumData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });
  }, []);

  return (
    <>
      {albumData.map((album) => (
        <div>
          <p>{album.title}</p>
        </div>
      ))}
    </>
  );
}

export default AlbumComponent;
