import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button type="button" className="flex items-center gap-x-1 text-sm font-semibold text-gray-900" aria-expanded="false">
                <Link to="/home" className="text-sm font-semibold text-gray-900">Home</Link> {/* Link to Home page */}
              </button>
            </div>

            {/* Link to About page */}
            <Link to="/about" className="text-sm font-semibold text-gray-900">About</Link>
            {/* Link to Contact page */}
            <Link to="/contact" className="text-sm font-semibold text-gray-900">Contact us</Link>
            {/* Link to Profile page */}
            <Link to="/profile" className="text-sm font-semibold text-gray-900">Profile</Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </nav>
      </header>
    </>
  );
}
