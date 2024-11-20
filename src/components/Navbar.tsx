"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <p className="navbar-logo">CarDealer</p>
          </Link>
          <button className="navbar-toggler" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link href="/">
                <p className="navbar-link">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/aboutUs">
                <p className="navbar-link">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="navbar-link">Services</p>
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
