import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="text-muted">Opps Sorry!</h1>
        <h1 className="text-danger">{err.status}</h1>
        <h1 className="text-danger fw-bold display-1">Page {err.statusText}</h1>
        <Link className="btn btn-primary fw-bold">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
