import React from 'react';
import { Link } from 'react-router-dom'
import '../hamburgers.min.css';

function Navbar(){
const clickHandler = () => {
  // console.log('clicked!');
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");

  });
}
return (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <button onClick={clickHandler} id="hamburger" className="hamburger hamburger--collapse float-right" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <h1 className="top-bar-title">HABITAT</h1>
  </div>
  <div className="block lg:hidden">

    <div className="mobile-nav" id="mobile-nav">
      <div className="link-wrap">
        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" href="https://tomasespinoza.me/projects/habitat">
          WHAT WE DO
        </a>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" href="https://tomasespinoza.me/projects/habitat">
          WHERE WE ARE
        </a>
        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" to="/">
          VIEW LISTINGS
        </Link>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey" href="https://tomasespinoza.me/projects/habitat">
          ABOUT
        </a>
      </div>
    </div>
  </div>
  <div className="desktop-nav w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" href="https://tomasespinoza.me/projects/habitat">
        WHAT WE DO
      </a>
      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" href="https://tomasespinoza.me/projects/habitat">
        WHERE WE ARE
      </a>
      <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey mr-4" to="/">
        VIEW LISTINGS
      </Link>
      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-grey" href="https://tomasespinoza.me/projects/habitat">
        ABOUT
      </a>
    </div>
  </div>
  </nav>
  );
}

export default Navbar;