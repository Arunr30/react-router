import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/home")}>go to home page</button>
    </div>
  );
};

export default NotFound;
