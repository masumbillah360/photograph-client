import React, { useContext } from "react";
import { TitleContext } from "../../context/TitleContext/TitleContext";

const BlogPage = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle("Blog");
  return (
    <div>
      <h1>This Will Be Blog Page</h1>
    </div>
  );
};

export default BlogPage;
