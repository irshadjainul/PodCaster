import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [mobileNav, setMobileNav] = useState(true);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "All Podcasts", path: "/allPodcasts" },
    // { name: "Profile", path: "/profile" },
  ];

  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileNav ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [mobileNav]);

  return (
    <nav className="py-3 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex-1 flex items-center gap-4">
          <img
            src="./PodcastLogo.png"
            alt="Logo"
            className="lg:w-[80px] w-[50px]"
          />
          <Link to="/" className="text-2xl lg:text-4xl font-bold">
            Podcaster
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden flex-1 lg:flex justify-center items-center space-x-5 text-lg">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="hover:font-semibold transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Login/Signup */}
        <div className="hidden flex-1 lg:flex justify-end gap-6">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-6 py-3 border-2 hover:bg-black hover:text-white border-black rounded-full transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Sign-up
              </Link>
            </>
          )}

          {isLoggedIn && <>
            <Link
                to="/profile"
                className="px-6 py-3 border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Profile
              </Link>
          </>}
        </div>

        {/* Mobile menu button */}
        <div className="w-4/6 mr-2 flex items-center justify-end lg:hidden z-50">
          <button
            className="text-4xl transition-all duration-300"
            onClick={() => setMobileNav(false)}
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-green-200 z-50 transition-transform duration-300 ${
          mobileNav ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6 z-50 text-3xl">
          <button
            className="bg-black text-white rounded-full p-3"
            onClick={() => setMobileNav(true)}
          >
            <RxCross2 />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="h-full flex flex-col items-center justify-center text-xl font-medium">
          {navLinks.map((item, i) => (
            <Link
              onClick={() => setMobileNav(true)}
              key={i}
              to={item.path}
              className="mb-10 text-2xl font-semibold transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileNav(true)}
            className="mb-10 px-6 py-2 border-2 border-black rounded-full"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMobileNav(true)}
            className="mb-10 px-6 py-2 border-2 border-black rounded-full"
          >
            Sign-up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
