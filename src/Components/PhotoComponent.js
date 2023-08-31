import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function PhotoComponent() {
  const { albumId } = useParams();
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
  }, [albumId]);

  if (!photoData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {photoData.map((photo) => (
        <Row xs={1} md={2} className="g-5 mb-lg-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <div key={photo.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={photo.thumbnailUrl}
                    rounded
                    alt={photo.title}
                  />
                  <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    <Card.Text>
                      <div>Url: {photo.url}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}

export default PhotoComponent;
