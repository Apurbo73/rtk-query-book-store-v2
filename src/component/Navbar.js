import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchBookQuery } from "../features/api/apiSlice";
import SearchResults from "./SearchResults";

const Navbar = () => {
  const [title, setTitle] = useState("");
  const {
    data: searchResult,
    isLoading,
    isError,
    isSuccess
  } = useSearchBookQuery(title);
  console.log("oka", title);

  //decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>No Books Found....</div>;
  }
  if (!isLoading && !isError && searchResult.length > 0) {
    content = searchResult.map(result =>
      <SearchResults result={result} />
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Book - <span className="text-warning">Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isSuccess &&
        <div className="container">
          {content}
        </div>}
    </div>
  );
};

export default Navbar;
