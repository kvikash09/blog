import { Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BlogLayout = () => {
  return (
    <>
      <Navbar bg="info" expand="lg" className="mb-lg-5">
        <LinkContainer to="/">
          <Navbar.Brand>Blog Post</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/photos">
              <Nav.Link>Photos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/albums">
              <Nav.Link>Albums</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default BlogLayout;
