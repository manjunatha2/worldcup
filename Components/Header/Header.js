import React, { useState } from "react";

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light px-4 py-2">
      <a className="navbar-brand" href="#">
        <img
          src="https://expert.investwithtribe.com/static/media/logo_white.462828a8.svg"
          height={"75"}
          width={"75"}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Benefits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
