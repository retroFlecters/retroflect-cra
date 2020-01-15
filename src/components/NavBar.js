import React from "react";
import NavBarProfileDropdown from "../components/NavBarProfileDropdown";

const NavBar = ({ handleSignOut, user }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        retroFlect
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavBarProfileDropdown
        handleSignOut={handleSignOut}
        user={user}
      ></NavBarProfileDropdown>
    </nav>
  );
};

export default NavBar;
