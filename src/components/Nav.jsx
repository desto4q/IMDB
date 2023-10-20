import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="content">
        <div className="logo">
          <Link to={"/"}>Logo</Link>
        </div>

        <form className="search_box">
          <input type="search" placeholder="search movie here..."  />
          <button>
            <IconSearch/>
          </button>
        </form>

        <div className="links">
          <NavLink to={"/Movie"}>Movie</NavLink>

          <NavLink to={"/lol"}>series</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
