import React from "react";
import Books from "./books/Books";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-end container">
        <Link to="/books/add" className="btn btn-warning mt-5  ">
          Add Books (+)
        </Link>
      </div>
      <Books />
    </div>
  );
};

export default Home;
