import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavbarWrapper = styled.nav``;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link to="home">home</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
        <li>
          <Link to="tags">tags</Link>
        </li>
        <li>
          <Link to="recipes">recipes</Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
