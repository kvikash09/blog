import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PostsComponent.css";

function PostsComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("Error Fetching Posts", error);
      });
  }, []);
  return (
    <>
      <h2 className="text-center mb-lg-4">Posts</h2>
      <div className="post">
        {posts.map((post) => (
          <div key={post.id}>
            <Card
              border="primary"
              style={{ width: "72rem" }}
              className="text-center shadow-lg">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <Link to={`/post/${post.id}`}>
                    <Button variant="primary">See Comments</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
export default PostsComponent;
