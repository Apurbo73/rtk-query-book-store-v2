import React from "react";
import ViewDetail from "./ViewDetail";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../features/api/apiSlice";

const Detail = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError, isSuccess } = useGetSingleBookQuery(id);
  // decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <div>Something went wrong.....</div>;
  }
  if (!isLoading && !isError && book.id) {
    content = (
      <div>
        <ViewDetail book={book} />
      </div>
    );
  }
  return (
    <div className="container text-center">
      {content}
    </div>
  );
};

export default Detail;
