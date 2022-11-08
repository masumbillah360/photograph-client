import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="container col-xl-10 col-xxl-8 py-3">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-6 text-center text-lg-end">
          <h1 class="fw-bold lh-1 mb-3">To Get Your Favorite Items</h1>
          <p class="lead">
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
        <div class="col-md-10 mx-auto col-lg-6">
          <form class="p-2 p-md-4 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
              />
              <label for="name">Full Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
              />
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="photoURL"
                name="photoURL"
                placeholder="https://gravatar.com/avatar.jpg"
              />
              <label for="photoURL">Photo URL</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>
            <div class="form-floating mb-3">
              <h6 className="text-muted">
                Already have an account? <Link to="/login">Login</Link>
              </h6>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
