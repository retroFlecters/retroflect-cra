import React from "react";
import NavBarProfileDropdown from "../components/NavBarProfileDropdown";

const NavBar = ({ handleSignOut, user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src="/icon.png" height="100"></img> retroFlect
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <NavBarProfileDropdown
        handleSignOut={handleSignOut}
        user={user}
      ></NavBarProfileDropdown>
    </nav>
  );
};

export default NavBar;
