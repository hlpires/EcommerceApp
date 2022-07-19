
import React from 'react';
import Link from 'next/link';


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">''</p>
        <h3>''</h3>
        <h1>''</h1>
        <img src='' alt="headphones" className="hero-banner-image" />

        <div>
          <Link href=''>
            <button type="button"></button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner