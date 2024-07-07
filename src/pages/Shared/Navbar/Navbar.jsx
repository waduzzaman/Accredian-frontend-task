
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mt-1 hover:text-blue-500">
        <NavLink to="/" exact activeClassName="active">
          Refer and Earn
        </NavLink>
      </li>
      <li className="mt-1  hover:text-blue-500">
        <NavLink to="/resources" activeClassName="active">
          Resources
        </NavLink>
      </li>
      <li className="mt-1   hover:text-blue-500">
        <NavLink to="/about-us" activeClassName="active">
          About Us
        </NavLink>
      </li>
      <li className="bg-gray-200 p-1 px-2 rounded border border-sky-500">
        <NavLink to="login" activeClassName="active">
       Login
        </NavLink>
      </li>
      <li className="bg-blue-500 text-white rounded p-1 px-2 flex gap-1" >
        <NavLink to="/try-for-free" activeClassName="active">
          Try for Free
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="shadow-lg">
        <h3 className="bg-[#1A73E826] py-2 text-center">Navigate your ideal career path with tailored expert advice <span className="text-[#1A73E8]"> Contact Expert</span></h3>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img className="w-20" src="logo.png" alt="Logo" />
            </Link>
            <Link className="bg-blue-500 text-white rounded p-1 px-2 flex gap-1" to='/'>
            Courses <IoIosArrowDown className="mt-1" /></Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">{navLinks}</ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="space-y-2">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
