import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  //custom hooks for change page title
  useTitle("AddService");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form?.title?.value;
    const photoURL = form?.photoURL?.value;
    const price = form?.price?.value;
    const postDesc = form?.postDescription?.value;
    const date = new Date().getTime();
    const postInfo = {
      email: user?.email,
      name: postTitle,
      picture: photoURL,
      price,
      description: postDesc,
      date,
    };
    // send service info on database
    fetch("https://tasty-bite-server.vercel.app/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(postInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Added Your Items");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={handlePostSubmit}>
        <Form.Group className="mb-3" id="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            required
            id="title"
            name="title"
            type="text"
            placeholder="post title..."
          />
        </Form.Group>
        <Form.Group className="mb-3" id="photoUrl">
          <Form.Label>Photo URL Link</Form.Label>
          <Form.Control
            id="photoUrl"
            required
            name="photoURL"
            type="text"
            placeholder="Photo url link..."
          />
        </Form.Group>
        <Form.Group className="mb-3" id="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            name="price"
            type="text"
            placeholder="Price Your Products..."
            id="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" id="postDesc">
          <Form.Label>Write Post Description</Form.Label>
          <Form.Control
            as="textarea"
            id="postDesc"
            name="postDescription"
            rows={4}
            placeholder="Post Description..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="submit"
            className="bg-primary text-white fw-bold"
            value="Add Now"
          ></Form.Control>
        </Form.Group>
      </Form>

      {/* for toast  */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddService;
