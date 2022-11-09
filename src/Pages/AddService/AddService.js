import React from "react";
import { Form } from "react-bootstrap";

const AddService = () => {
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.title.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const postDesc = form.postDescription.value;
    const date = new Date().getTime();
    const postInfo = {
      name: postTitle,
      picture: photoURL,
      price,
      description: postDesc,
      date,
    };
    fetch("http://localhost:8000/allfood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={handlePostSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            id="title"
            name="title"
            type="text"
            placeholder="post title..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photoURL">
          <Form.Label id="photoURL">Photo URL</Form.Label>
          <Form.Control name="photoUrl" type="url" placeholder="Photo url..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder="Price Your Products..."
            id="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postDesc">
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
            type="submit"
            className="bg-primary text-white fw-bold"
            value="Post Now"
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddService;
