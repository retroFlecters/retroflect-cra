import React from "react";

const NavBarProfileDropdown = ({ handleSignOut, user }) => {
  return (
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
              {`${user.firstName} ${user.lastName}`}
            </a>
            <button class="dropdown-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBarProfileDropdown;
