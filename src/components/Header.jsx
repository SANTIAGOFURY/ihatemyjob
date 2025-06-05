import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="header-left">
          <div className="logo">
            <span className="material-symbols-outlined"> flutter </span>
          </div>
          <h2>
            Market<span>place</span>
            <span className="dot">.</span>
          </h2>
        </div>
        <div className="header-center">
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/about"> About </a>
            </li>
            <li>
              <a href="/products"> Products </a>
            </li>
            <li>
              <a href="/info"> Info </a>
            </li>
            <li>
              <a href="/contact"> Contact </a>
            </li>
            <li>
              <a href="/support"> Support </a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button>Register</button>
          <button>
            <span className="material-symbols-outlined"> shopping_cart </span>
          </button>
          <button>Dev</button>
        </div>
        <aside>
          <div className="type-one">
            <a href="#actions">
              Action
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#adventures">
              Adventure
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#horror">
              Horror
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#shooter">
              Shooter
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#simulation">
              Simulation
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#sport">
              Sports
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#racing">
              Racing
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#strategy">
              Strategy
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>

          <div className="type-one">
            <a href="#fighting">
              Fighting
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="#survival">
              Survival
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
          <div className="type-one">
            <a href="">
              Programs
              <span className="material-symbols-outlined">trending_up</span>
            </a>
          </div>
        </aside>
      </header>
    </>
  );
}

export default Header;
