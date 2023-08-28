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
        </ul>
      </nav>
      <div className="m-10">
        <h1>Out of above is shown below</h1>
      </div>
      <Outlet />
    </>
  );
};

export default WorkoutLayout;
