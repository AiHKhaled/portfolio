import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <NavBar>
      <h1>
        <Link id="logo" to="/">
          portfolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: #333333;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  a {
    color: white;
    text-decoration: None;
  }
  ul {
    display: flex;
    list-style: None;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
  #logo {
    font-size: 2rem;
    font-family: "ZCOOL KuaiLe", cursive;
  }
`;
export default Nav;
