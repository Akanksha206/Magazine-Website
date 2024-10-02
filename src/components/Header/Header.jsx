import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white w-full">
      <nav className="flex justify-center items-center bg-white border-gray-200 py-3 px-20">
        <div className="flex space-x-16 px-12">
          <NavLink 
            to="/Home" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
            Magazines
          </NavLink>
          <NavLink 
            to="/featured" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
            Featured
          </NavLink>
          <NavLink 
            to="/business" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
            Business
          </NavLink>
          <NavLink 
            to="/testimonial" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
           Testimonial
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive ? 'text-xl font-bold text-blue-600' : 'text-xl font-bold hover:underline'
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
