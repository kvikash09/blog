import { Pagination } from "react-bootstrap";
import "./App.css";
import BlogComponentRouter from "./Components/BlogRouterComponent";

function App() {
  return (
    <>
      <BlogComponentRouter />
      <Pagination />
    </>
  );
}

export default App;
