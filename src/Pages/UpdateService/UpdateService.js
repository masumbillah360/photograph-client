import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const UpdateService = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { _id, description, name, price, picture } = data;
  const { user } = useContext(AuthContext);
  useTitle("Update Service");
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form?.title?.value;
    const photoURL = form?.photoURL?.value;
    const price = form?.price?.value;
    const postDesc = form?.postDescription?.value;
    const date = new Date().getTime();
    const updatedInfo = {
      email: user?.email,
      name: postTitle,
      picture: photoURL,
      price,
      description: postDesc,
      date,
    };
    console.log(updatedInfo);
    fetch(`http://localhost:8000/myservices/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Update Your Items");
        navigate("/myservices");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={handlePostSubmit}>
        <Form.Group className="mb-3" id="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            id="title"
            name="title"
            type="text"
            defaultValue={name}
            placeholder="post title..."
          />
        </Form.Group>
        <Form.Group className="mb-3" id="photoUrl">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            id="photoUrl"
            name="photoURL"
            type="text"
            defaultValue={picture}
            placeholder="Photo url link..."
          />
        </Form.Group>
        <Form.Group className="mb-3" id="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            defaultValue={price}
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
            defaultValue={description}
            rows={4}
            placeholder="Post Description..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="submit"
            className="bg-primary text-white fw-bold"
            value="Post Now"
          ></Form.Control>
        </Form.Group>
      </Form>
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

export default UpdateService;
