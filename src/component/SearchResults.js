import React from 'react';

const SearchResults = ({result}) => {
    const {name,author, price}=result;
    return (
        <div >
        results
       <p>{name}</p>
        </div>
    );
};

export default SearchResults;