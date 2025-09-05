import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Movies", path: "/movies" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-gray-800 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/popcorn.png"
              alt="FullStackProject"
              className="h-10 w-auto cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => navigate("/movies")}
            />
          </div>

          {/* Links Desktop */}
          <div className="hidden sm:flex space-x-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium text-white
                  border border-gray-900
                  hover:bg-gray-700
                  transition-colors duration-200
                  ${location.pathname === link.path ? "bg-gray-700 ring-1 ring-gray-400" : ""}
                `}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
