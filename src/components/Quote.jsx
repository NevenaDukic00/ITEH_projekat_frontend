import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/quotes.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="look">
      <h1>Random quotes to inspire you to read a new book ;)</h1>
      <div className="card1">
        <div className="container1">
          <div className="quoteButton">
            <button className="button" onClick={quoteAPI}>
              New quote
            </button>
          </div>
          <div className="quote">
            <h2>{quote}</h2>
          </div>
          <div className="author">{author}</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
