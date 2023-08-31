import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TodoComponent.css";

function TodoComponent() {
  const { userId } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching Todo for user ${userId}:`, error);
      });
  }, [userId]);

  return (
    <>
      <h2>Todo for User: {userId}</h2>
      <div className="todo">
        {todo.map((to) => (
          <div key={to.id}>
            <Card style={{ width: "22rem" }} className="shadow-lg">
              <Card.Body>
                <Card.Title>Title: {to.title}</Card.Title>
                <Card.Text>Status: {to.completed}</Card.Text>
                <Button variant="success">Submit</Button>
                <Button variant="primary">Try Again</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoComponent;
