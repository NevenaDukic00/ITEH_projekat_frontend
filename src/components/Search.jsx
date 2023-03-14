import React, { useState, useEffect } from "react";
import Books from "./Books";
import { useMemo } from "react";

function Search({ details, addToCart, removeFromCart, deleteBook, user }) {
  console.log("U searchu product je: " + details);

  const [state, setState] = useState({
    details: details || [],
    searchField: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, searchField: e.target.value }));
    flag = 0;
  };

  const filteredBooks = useMemo(
    () =>
      state.details.filter((book) => {
        return book.name
          .toLowerCase()
          .includes(state.searchField?.toLowerCase());
      }),
    [state]
  );

  var flag = -1;

  function showBooks() {
    return (
      <Books
        books={filteredBooks}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteBook={deleteBook}
        user={user}
      />
    );
  }

  function handleSort() {
    const sortedData = [...state.details].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    flag = 1;
    setState({ details: sortedData, searchField: "" });
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h5 className="f2" style={{ marginLeft: 10 }}>
          Search for books that you love!
        </h5>
      </div>
      <div className="pa2" style={{ marginLeft: 10 }}>
        <input
          className="pa3"
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <button onClick={handleSort} style={{ marginLeft: 1200 }}>
          Sort by price
        </button>
      </div>
      {showBooks()}
    </section>
  );
}

export default Search;
