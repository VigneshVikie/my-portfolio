import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
      <div className="error-page">
        <div>Oops, you are on the wrong page!!!</div>
      <button type="button" className="gohome-btn" onClick={handleClick}>
        Go Home
      </button>
      </div>

  );
};

export default ErrorPage;
