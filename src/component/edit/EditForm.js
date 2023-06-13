import React, { useEffect, useState } from "react";
import { useEditBookMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const EditForm = ({ book }) => {
  const navigate = useNavigate();
  const {
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    id
  } = book;

  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [deleteBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    deleteBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price
      }
    });
    resetForm();
  };

  // reset form"
  const resetForm = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setThumbnail("");
  };

  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );
  return (
    <div>
      <form
        className="w-25 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <h5 className="text-center mb-3">Edit Book Details !!!</h5>

        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Book Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
            placeholder="Author Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={thumbnail}
            onChange={e => {
              setThumbnail(e.target.value);
            }}
            placeholder="Book Thumbnail"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
            placeholder="Book Price"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-warning w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
