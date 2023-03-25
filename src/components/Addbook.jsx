import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/login.css";

function Addbook({ genres }) {
  const [genre, setGenre] = useState([]);

  const [bookData, setBook] = useState({
    name: "",
    author: "",
    publisher: "",
    shortDescription: "",
    description: "",
    price: "",
    genre_id: "",
    url: "",
  });

  useEffect(() => {
    const newGenres = [];
    console.log("U Addbook genres su : " + genres);
    console.log("ULAZI DA PUNI LISTU");
    genres.forEach((u) => {
      newGenres.push({
        label: u.name,
        value: u.id,
      });
    });
    setGenre(newGenres || []);
  }, [genres]);

  console.log("NewGenres: ", genre);

  function handleInput(e) {
    console.log(e);
    let newData = bookData;
    newData[e.target.name] = e.target.value;
    console.log(newData);
    setBook(newData);
  }

  function handleSubmit(e) {
    console.log("Usao u submit");
    console.log(bookData);
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/addBook", bookData)
      .then((res) => {
        console.log(res.data.success);
        console.log(res.data);
        console.log(res);
        if (res.data.success == "true") {
          alert("Book successfully added!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add new book</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter name"
              name="name"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Author</label>
            <input
              type="author"
              className="form-control mt-1"
              placeholder="Enter author"
              name="author"
              onInput={handleInput}
            />
          </div>
          <div className="select">
            <label>Genre</label>
            <br />
            <select
              type="genre_id"
              className="form-control mt-1"
              placeholder="Enter genre"
              name="genre_id"
              onInput={handleInput}
            >
              <option value="select genre">Select genre</option>
              {genre.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Publisher</label>
            <input
              type="publisher"
              className="form-control mt-1"
              placeholder="Enter publisher"
              name="publisher"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Short description</label>
            <input
              type="shortDescription"
              className="form-control mt-1"
              placeholder="Enter short description"
              name="shortDescription"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <input
              type="description"
              className="form-control mt-1"
              placeholder="Enter description"
              name="description"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              type="price"
              className="form-control mt-1"
              placeholder="Enter price"
              name="price"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Picture</label>
            <input
              type="url"
              className="form-control mt-1"
              placeholder="Enter picture URL"
              name="url"
              onInput={handleInput}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Addbook;
