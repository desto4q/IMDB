import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchStore } from "../stores/search_store";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Rotate as Hamburger } from "hamburger-react";
import { useState } from "react";

function Nav() {
  const setTerm = useSearchStore((state) => state.setSearch);

  let navigate = useNavigate();
  let location = useLocation();
  let [side, setSide] = useState(false);
  let toggleSide = () => {
    setSide(false)
  }

  let Setquery = (e) => {
    e.preventDefault();
    let value = e.target[0].value;

    if (e.target[0].value != "" || e.target[0].value != " ") {
      if (location.pathname.includes("/search/")) {
        setTerm(value);
      } else {
        setTerm(value);
        navigate("/search/1");
      }
    } else {
      console.log("wrong search");
    }
  };
  return (
    <nav className="nav">
      <div className="content">
        <div className="logo">
          <Link to={"/"}>
            <img src="/text2.png" />
          </Link>
        </div>
        <div className="mobile_logo">
          <Link to={"/"}>
            <img src="/mobile.png" />
          </Link>
        </div>

        <form className="search_box" onSubmit={Setquery}>
          <input type="search" placeholder="search movie here..." />
          <button>
            <IconSearch />
          </button>
        </form>

        <div className="links">
          <NavLink to={"/movie/1"}>Movie</NavLink>

          <NavLink to={"/Tv-series/1"}>Series</NavLink>
          <NavLink to={"/recent/1"}>Recent Movies</NavLink>
        </div>
        <div className="ham">
          <Hamburger
            color="#FB9110"
            toggled={side}
            toggle={(side) => {
              setSide(side);
            }}
          />
        </div>
      </div>
      <div className="side_bar" style={{transform: `translateY(${side ? 0: -120}vh)`}}>
        <div className="side_content">
          <NavLink onClick={toggleSide} to={"/movie/1"}>Movie</NavLink>

          <NavLink onClick={toggleSide} to={"/Tv-series/1"}>Series</NavLink>
          <NavLink onClick={toggleSide} to={"/recent/1"}>Recent Movies</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
