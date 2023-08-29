import { Outlet, Link } from "react-router-dom";

const BlogLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Album">Album Page</Link>
          </li>
          <li>
            <Link to="/Photos">Photos</Link>
          </li>
          <li>
            <Link to="/Albums">Albums</Link>
          </li>
        </ul>
      </nav>
      <div className="m-10">
        <h1>Blog Post</h1>
      </div>
      <Outlet />
    </>
  );
};

export default BlogLayout;
