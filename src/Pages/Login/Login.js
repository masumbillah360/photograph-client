import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { googleSignIn, loginUser, setUser, setError } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";
  // google login function
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

  //with email and password login function
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
        // user verify by jwt token
        fetch("https://tasty-bite-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          // set token on localStorage
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
    <div className=" col-xl-10 col-xxl-8 py-3">
      <div className="row align-items-center g-lg-5 py-5">
        {/* information section  */}
        <div className="col-lg-6 text-center text-lg-end">
          <h1 className="fw-bold lh-1 mb-3">
            To Get Your Favorite & Special{" "}
            <span className="text-danger">PhotoGraph</span>
          </h1>
          <p className="lead">
            If You want to get Special Photo Graph information and Services then
            this site for you. can SignUP and login this website. It's should be
            helpfull for you.
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

        {/* login section  */}
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
