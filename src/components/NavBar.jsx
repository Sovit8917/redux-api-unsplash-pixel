import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="
      sticky top-0 z-50
      px-12 py-4
      flex justify-between items-center
      bg-black/40 backdrop-blur-xl
      border-b border-white/10
    ">
      <h1 className="text-2xl font-extrabold tracking-wide">
        <span className="text-blue-500">Media</span>Vault
      </h1>

      <div className="flex gap-4">
        <Link className="nav-btn-primary" to="/">Home</Link>
        <Link className="nav-btn-secondary" to="/collection">Collection</Link>
      </div>
    </nav>
  );
}


export default NavBar;
