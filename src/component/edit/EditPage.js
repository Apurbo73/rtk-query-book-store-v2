import React from "react";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../features/api/apiSlice";

const EditPage = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError, isSuccess } = useGetSingleBookQuery(
    id
  );
  // decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error....</div>;
  }
  if (!isLoading && !isError && book.id) {
    content = (
      <div>
        <EditForm book={book}/>
      </div>
    );
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default EditPage;
