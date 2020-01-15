import React from "react";

const NavBar = ({ handleSignOut }) => {
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown right">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profile
            </a>
            <div class="dropdown-menu left" aria-labelledby="navbarDropdown">
              <a class="dropdown-item disabled" href="#">
                Signed in as user
              </a>

              <button class="dropdown-item" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
