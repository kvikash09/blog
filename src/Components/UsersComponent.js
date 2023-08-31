import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./UsersComponent.css";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching User", error);
      });
  }, []);
  return (
    <>
      <h2>Users</h2>
      <div className="user">
        {users.map((user) => (
          <Card bg="warning" style={{ width: "18rem" }} className="shadow-lg">
            <div key={user.id}>
              <Card.Header>{user.username}</Card.Header>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <div>Email:{user.email}</div>
                  <div>Phone:{user.phone}</div>
                  <div>Website:{user.website}</div>
                  <Link to={`/user/${user.id}`}>
                    <Button variant="primary">See Post</Button>
                  </Link>
                  <Link to={`/users/${user.id}`}>
                    <Button variant="primary">See Todo</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UsersComponent;
