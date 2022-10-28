import React, { useState, useEffect } from "react";
import LeftQuote from "../images/left-quote.svg";

export default function Quote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <section className='quotes-container'>
      <div className='quotes-heading'>
        <img src={LeftQuote} alt='Left quote' />
        <h2>A quote for inspiration</h2>
      </div>
      <div className='quotes-box'>
        <div className='quote'>{`"${quote.content}"`}</div>
        <div className='author'>- {quote.author}</div>
      </div>
    </section>
  );
}
