import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LeftQuote from "../images/left-quote.svg";
import RefreshQuote from "../images/refresh-quote.svg";

export default function Quote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  }, []);

  // Fetch new quote on button click
  function newQuote() {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  }

  const { ref: quoteImageRef, inView: quoteImageIsVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: headingRef, inView: headerIsVisible } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  const { ref: quotesBoxRef, inView: quotesBoxIsVisible } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const { ref: quoteRef, inView: quoteIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: authorRef, inView: authorIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className='quotes-container'>
      <div className='quotes-heading'>
        <img
          className={`quote-image ${
            quoteImageIsVisible ? "show-quote-img" : ""
          }`}
          ref={quoteImageRef}
          src={LeftQuote}
          alt='Left quote'
        />
        <h2
          className={`${headerIsVisible ? "show-heading" : ""}`}
          ref={headingRef}
        >
          A quote for inspiration
        </h2>
      </div>
      <div
        className={`quotes-box ${quotesBoxIsVisible ? "show-quotes-box" : ""}`}
        ref={quotesBoxRef}
      >
        <div
          className={`quote ${quoteIsVisible ? "show-quote" : ""}`}
          ref={quoteRef}
        >{`"${quote.content}"`}</div>
        <div
          className={`author ${authorIsVisible ? "show-author" : ""}`}
          ref={authorRef}
        >
          - {quote.author}
        </div>
        <img onClick={newQuote} src={RefreshQuote} alt='Refresh quote' />
      </div>
    </section>
  );
}
