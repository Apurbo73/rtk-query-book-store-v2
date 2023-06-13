import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { name, author, thumbnail, price, id } = book;
  return (
    <div>
      <div className="card m-2 text-center" style={{ width: "14rem" }}>
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
            Price : {price}$
          </p>
          <Link to={`/books/${id}`} className="btn btn-warning m-1">
            Detail
          </Link>
          <Link to="#" className="btn btn-dark m-1">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
