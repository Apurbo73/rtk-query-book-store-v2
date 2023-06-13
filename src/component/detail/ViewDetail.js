import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../../features/api/apiSlice";

const ViewDetail = ({ book }) => {
  const { name, thumbnail, price, author, rating, id } = book;
  const navigate = useNavigate();
  const [
    deleteBook,
    { isSuccess, isError, isLoading }
  ] = useDeleteBookMutation();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteBook(id);
  };
  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, [isSuccess]);

  return (
    <div>
      <div
        className="card mx-auto mt-5 shadow-lg p-1 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <img
          style={{ height: 230 }}
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
          <div className="d-flex">
            <button
              to="#"
              className="btn btn-warning w-50 mt-1 m-1"
              onClick={handleDelete}
            >
              Delete
            </button>
            <Link to={`/books/edit/${id}`} className="btn btn-dark w-50 mt-1 m-1">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
