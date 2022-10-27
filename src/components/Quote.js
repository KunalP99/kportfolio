import React, { useState, useEffect } from "react";
import LeftQuote from "../images/left-quote.svg";

export default function Quote() {
  // API call - https://zenquotes.io/api/today/
  const [quote, setQuote] = useState({});

  useEffect(() => {
    console.log("effect ran");
    fetch("https://zenquotes.io/api/quotes ")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  console.log(quote);

  return (
    <section className='quotes-container'>
      <div className='quotes-heading'>
        <img src={LeftQuote} alt='Left quote' />
        <h2>Quote of the day</h2>
      </div>
      <div className='quotes-box'>
        <div className='quote'>{quote.q}</div>
        <div className='author'>- Kunal Patel</div>
      </div>
    </section>
  );
}
