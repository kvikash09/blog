import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PostsByUser.css";

function PostsByUser() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching post for user ${userId}:`, error);
      });
  }, [userId]);

  return (
    <>
      <h2>Posts by User: {userId}</h2>
      <div className="postPage">
        {posts.map((post) => (
          <div key={post.id}>
            <Card style={{ width: "22rem" }} className="shadow-lg">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostsByUser;
