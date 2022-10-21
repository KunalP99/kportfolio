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
        data={`https://gistcdn.githack.com/KunalP99/089fccb505f8b431b4b5b6ab7d401356/raw/8ed192d88f4a760ec026dce5e8bc9dc70fa5485b/monitor-portfolio.svg`}
        type='image/svg+xml'
        aria-label='Animation'
      ></object>
    </div>
  );
}
