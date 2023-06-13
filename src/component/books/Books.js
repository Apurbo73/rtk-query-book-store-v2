import React from "react";
import Book from "./Book";
import { useGetAllBookQuery } from "../../features/api/apiSlice";

const Books = () => {
  const { data: books, isLoading, isError, isSuccess } = useGetAllBookQuery();
  // decide what to render:
  let content = null;
  if (isLoading) {
    content = (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (!isLoading && isError) {
    content = (
      <div>
        <h2>Something went wrong...</h2>
      </div>
    );
  }
  if (!isLoading && !isError && books.length > 0) {
    content = books.map(book => <Book key={book.id} book={book} />);
  }
  return (
    <div className=" container mt-5">
      <div className="text-center mt-5 mb-5">Books Collection</div>
      <div className="d-flex flex-wrap mx-auto">
        {content}
      </div>
    </div>
  );
};

export default Books;
