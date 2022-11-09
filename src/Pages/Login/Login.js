import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { TitleContext } from "../../context/TitleContext/TitleContext";

const Login = () => {
  const { googleSignIn, loginUser, setUser, setError } =
    useContext(AuthContext);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  setTitle("Login");
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        const user = result.user;
        const currentUser = { email: user?.email };
        fetch("http://localhost:8000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", data.token))
          .catch((err) => console.log(err));

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
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
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline-danger"
            >
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
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <h6 className="text-muted">
                Do not have an account? <Link to="/signup">SignUP</Link>
              </h6>
            </div>
            <input
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
