import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./CommentComponent.css";

function CommentComponent() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching Comments for Posts ${postId}:`, error);
      });
  }, [postId]);

  return (
    <>
      <h2>All Comments on: Post {postId}</h2>
      <div className="comment">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Card style={{ width: "22rem" }} className="shadow-lg">
              <Card.Body>
                <Card.Title>Name: {comment.name}</Card.Title>
                <Card.Text>Email: {comment.email}</Card.Text>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentComponent;
