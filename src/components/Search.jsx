import React, { useState, useEffect } from "react";
import Books from "./Books";

function Search({
  details,
  addToCart,
  removeFromCart,
  deleteBook,
  user,
  updatePrice,
  flag,
}) {
  console.log("ima li knjiga " + details);

  const [searchField, setSearchField] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(details || []);
    console.log("state je:" + state);
  }, [details]);

  const filteredBooks = state?.filter((book) => {
    return book.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function showBooks() {
    return (
      <Books
        books={filteredBooks}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteBook={deleteBook}
        user={user}
        updatePrice={updatePrice}
      />
    );
  }

  function handleSort() {
    console.log("Usao u sort");
    console.log("Prosledjeni details: " + details);
    console.log("Dobijeni state: " + state);
    const sortedData = [...state].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    console.log(sortedData);
    flag = 1;
    setState(sortedData);
    console.log("Nakon sorta: " + state);
  }

  return (
    <section>
      <div className="main">
        <h5 style={{ marginLeft: 10 }}>Search for books that you love!</h5>
      </div>
      <div className="pa2" style={{ display: "flex", marginLeft: 60 }}>
        <input
          className="pa3"
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <button
          onClick={handleSort}
          style={{
            marginLeft: 900,
            width: 150,
            borderRadius: 5,
            borderColor: "purple",
          }}
        >
          Sort by price
        </button>
      </div>
      {details == null ? <p>Loading...</p> : showBooks()}
    </section>
  );
}

export default Search;
