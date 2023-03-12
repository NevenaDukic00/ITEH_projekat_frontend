import React, { useState } from "react";
import Books from "./Books";
import { useMemo } from "react";

function Search({ details, addToCart, removeFromCart, deleteBook, user }) {
  const [state, setState] = useState({
    details: details || [],
    searchField: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, searchField: e.target.value }));
  };

  const filteredBooks = useMemo(
    () =>
      state.details.filter((book) => {
        return book.name
          .toLowerCase()
          .includes(state.searchField.toLowerCase());
      }),
    [state]
  );

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
      </div>
      {showBooks()}
    </section>
  );
}

export default Search;
