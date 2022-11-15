import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <header className="flex max-w-[800px] justify-between items-center mx-auto h-[70px]">
        {/* Logo */}
        <div>
          <p>Opener</p>
        </div>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <Link to="/send">Send</Link>
            </li>
            <li>
              <Link to="/open">Open</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
