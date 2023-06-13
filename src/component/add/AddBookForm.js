import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddBookMutation } from "../../features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddBookForm = () => {
  const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState();
  const [thumbnail, setThumbnail] = useState();
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    addBook({
      name,
      price,
      author,
      thumbnail
    });
    {
       toast(`New Book ${name} Is Added`);
    }
    {
      isError && toast(`Something went wrong !!`);
    }

    resetForm();
  };
  const resetForm = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setThumbnail("");
  };
  return (
    <div className="container mt-5 w-25 shadow-lg p-3 mb-5 bg-body rounded">
      <h5 className="text-center mb-3">Add New Book !!!</h5>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Enter Book Title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            required
            value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
            placeholder="Enter Author Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            required
            value={thumbnail}
            onChange={e => {
              setThumbnail(e.target.value);
            }}
            placeholder="Enter Book Thumbnail"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            required
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
            placeholder="Enter Price"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-warning w-100 mb-2">
          Submit
        </button>
      </form>
      <Link to="/" className="btn btn-dark w-100">
        Back To Home
      </Link>
    </div>
  );
};

export default AddBookForm;
