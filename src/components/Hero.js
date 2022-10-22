import React from "react";

export default function Hero() {
  return (
    <div className='hero-container'>
      <div>
        <h1 className='hero-main-text'>Hi, I'm Kunal Patel</h1>
        <p className='hero-secondary-text'>{`> Aspiring Frontend Developer`}</p>
      </div>
      <object
        className='hero-anim'
        data={`https://gistcdn.githack.com/KunalP99/eae45d11d78adf77c7e031b8a6e7609a/raw/c1f37a312bf3b1bcc94461f8825570435f1f96c7/monitor-portfolio.svg`}
        type='image/svg+xml'
        aria-label='Animation'
      ></object>
    </div>
  );
}
