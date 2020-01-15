import React from "react";

const NavBarProfileDropdown = ({ handleSignOut, user }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown right">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Profile
          </a>
          <div className="dropdown-menu left" aria-labelledby="navbarDropdown">
            <a className="dropdown-item disabled" href="#">
              {`${user.firstName} ${user.lastName}`}
            </a>
            <button className="dropdown-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBarProfileDropdown;
