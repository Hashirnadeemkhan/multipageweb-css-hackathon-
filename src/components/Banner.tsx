import React from 'react';
import Link from 'next/link';
import '../styles/Banner.css';
import Image from 'next/image';
import heroImg from "/public/garage-hero.webp";

const Banner = () => (
  <section className="banner-section">
    <div className="container">
      <div className="row">
        <div className="column content-column">
          <h1 className="banner-heading">
            Unleash Your <span className="highlight">Driving Potential</span>
          </h1>
          <p className="banner-lead">
            Discover unparalleled driving experiences with our wide range of premium vehicles. Let us help you make every journey memorable and exhilarating.
          </p>
          <Link href="/contactus" legacyBehavior>
            <a className="banner-button">Get Started</a>
          </Link>
        </div>
        <div className="column image-column">
          <Image
            className="banner-image"
            src={heroImg}
            alt="Premium Car Garage Banner"
            loading="lazy"
            height={600}
            width={600}
            
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;

