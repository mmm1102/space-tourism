import React from "react";
import styled from "styled-components";
import SVGLogo from "./SVGLogo";
import { NavLink } from "react-router-dom";

const NavBar = styled.div`
  background-color: transparent;
  position: fixed;
  font-family: Arial;
  display: flex;
  align-items: center;
  font-family: "Barlow Condensed", sans-serif;
  padding-top: 3rem;
  padding-left: 6%;
`;

const Logo = styled.div`
  flex-basis: 10%;
  align-self: center;
  display: block;
`;

const Line = styled.div`
  width: 20%;
  border-bottom: 1px solid #484a53;
  margin-left: 1em;
  display: inline-block;
`;

const Menu = styled.ul`
  display: flex;

  list-style: none;
  background: rgb(21, 22, 34);
  background: linear-gradient(
    90deg,
    rgba(21, 22, 34, 0.9051995798319328) 0%,
    rgba(57, 71, 93, 0.87718837535014) 35%
  );
  gap: 2rem;
  font-weight: 100;
  letter-spacing: 3px;
  flex-basis: 60%;
  padding: 2rem 3rem;
`;

const Navigation = () => {
  return (
    <NavBar>
      <Logo>
        <SVGLogo></SVGLogo>
      </Logo>

      <Line></Line>
      <Menu>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid white" : "none",
              paddingBottom: "1.8rem",
              paddingTop: "2rem",
              textDecoration: "none",
            })}
          >
            {" "}
            00 Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid white" : "none",
              paddingBottom: "1.8rem",
              paddingTop: "2rem",
              textDecoration: "none",
            })}
          >
            01 Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid white" : "none",
              paddingBottom: "1.8rem",
              paddingTop: "2rem",
              textDecoration: "none",

              backgroundColor: isActive ? "red" : "blue",
            })}
          >
            02 Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid white" : "none",
              paddingBottom: "1.8rem",
              paddingTop: "2rem",
              textDecoration: "none",
            })}
          >
            03 Technology
          </NavLink>
        </li>
      </Menu>
    </NavBar>
  );
};

export default Navigation;
