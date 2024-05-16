import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 h-auto navbar">
      <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
        <span className="font-semibold text-xl tracking-tight text-gray-100 ">
          <Link
            to='/'>
            CodeWise
          </Link>
        </span>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8-8">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
              SignUp
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/account"
            >
              <img 
              className='rounded-full h-7 w-7 bg-gray-800' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Account" />
            </NavLink> */}
            <NavLink
              to="/account"
              className="opacity-100"
            >
              <img
                className="rounded-full h-7 w-7 bg-gray-800"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt="Account"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header