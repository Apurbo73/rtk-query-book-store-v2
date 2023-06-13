import React from "react";
import { Link } from "react-router-dom";

const ViewDetail = ({ book }) => {
  const { name, thumbnail, price, author, rating } = book;
  return (
    <div>
      <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
        <img
          style={{ height: 250 }}
          src={thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">
            {name}
          </h6>
          <p className="card-text">
            Author : {author}
          </p>
          <p className="card-text">
            Price: {price}$
          </p>
          <p className="card-text">
            Rating : {rating}
          </p>
          <Link to="#" className="btn btn-warning w-100 mt-4 mb-1">
            Delete Book
          </Link>
          <Link to="/" className="btn btn-dark w-100">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
