import { useState } from "react";
import React from "react";
import AboutGame from "./AboutGame";
import ShipsPlacement from "./ShipsPlacement";
import Demo from "./Demo";
import Team from "./Team";

// import AnimBoard from "./AnimBoard";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand-LOGO" href="#">
            BATTLESHIP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setup">
                  Setup
                </a>
              </li>
              {/* {/* <li className="nav-item">
                <a className="nav-link" href="#office">
                  Offices
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#demo">
                  Demo
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.behance.net/bravvjr"
                  className="btn btn-brand ms-lg-3"
                >
                  My Portfolio
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                data-aos="fade-left"
                className="text-uppercase text-white fw-semibold display-1"
              >
                Welcome to <br /> BATTLESHIP
              </h1>
              <h5 className="text-white mt-3 mb-4" data-aos="fade-right">
                Welcome to the battleship tutorial page that will provide you
                with step by step guide on how to play the game.
              </h5>
              <div data-aos="fade-up" data-aos-delay="50">
                <a href="#" className="btn btn-brand me-2">
                  BATTLESHIP{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <AboutGame />
      {/* BOARD */}
      <ShipsPlacement />
      {/* {/* ANIMATED BOARD */}
      <Demo/>
      {/* TEAM */}
      <Team />
      

    </div>
  );
}

export default App;
