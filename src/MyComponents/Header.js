import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./Header.css";
import logo from "./assets/LINKVERSE.jpg";


export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img  className="logo" src={logo} alt="" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button type="button" className="flex items-center gap-x-1 text-sm font-semibold text-gray-900" aria-expanded="false">
                <Link to="/home" className="font-semibold text-gray-900">Home</Link> {/* Link to Home page */}
              </button>
            </div>

            {/* Link to About page */}
            <Link to="/about" className="font-semibold text-gray-900">About</Link>
            {/* Link to Contact page */}
            <Link to="/contact" className="font-semibold text-gray-900">Contact us</Link>
            {/* Link to Profile page */}
            <Link to="/jobSearch" className="font-semibold text-gray-900">Job Search</Link>
            <Link to="/profile" className="font-semibold text-gray-900">Profile</Link>
            <Link to="/chat" className="font-semibold text-gray-900">Chat</Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </nav>
      </header>
    </>
  );
}
