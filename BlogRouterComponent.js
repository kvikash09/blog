import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./PostsComponent";
import UsersComponent from "./UsersComponent";
import BlogLayout from "./BlogLayout";
import PhotoComponent from "./PhotoComponent";
import AlbumComponent from "./AlbumComponent";

const BlogComponentRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route path="Posts" element={<PostsComponent />} />
          <Route path="Users" element={<UsersComponent />} />
          <Route path="Photos" element={<PhotoComponent />} />
          <Route path="Albums" element={<AlbumComponent />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default BlogComponentRouter;
