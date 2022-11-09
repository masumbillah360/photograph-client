import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Signup = () => {
  const { userSignIn, updateUserInfo, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Sign Up");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    userSignIn(email, password).then((result) => {
      setUser(result.user);
      handleUpdateInfo(name, photoURL);
      Swal.fire({
        title: "Successfully SignUp",
        text: "Please Login Now!",
        icon: "success",
        confirmButtonText: "Login Now!",
      });
      navigate("/login");
    });
  };
  const handleUpdateInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserInfo(profile)
      .then(() => {
        console.log("updated");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container col-xl-10 col-xxl-8 py-3">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-6 text-center text-lg-end">
          <h1 className="fw-bold lh-1 mb-3">To Get Your Favorite Items</h1>
          <p className="lead">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
          <div className="d-flex justify-content-evenly mb-4">
            <button className="btn btn-outline-danger">
              Google <FaGoogle />
            </button>
            <button className="btn btn-outline-secondary">
              Github <FaGithub />
            </button>
          </div>
        </div>
        <div className="col-md-10 mx-auto col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="p-2 p-md-4 border rounded-3 bg-light"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
              />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="photoURL"
                name="photoURL"
                placeholder="https://gravatar.com/avatar.jpg"
              />
              <label htmlFor="photoURL">Photo URL</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
              <h6 className="text-muted">
                Already have an account? <Link to="/login">Login</Link>
              </h6>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
