import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Ink from "react-ink";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Flagicon from "react-country-flag";

const Navigation = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 1px -1px 16px rgba(51, 51, 51, 0.5);
  position: fixed;
  top: 0%;
  padding: 0 40px;
  z-index: 100;
  span {
    float: right;
    padding: 10px;
    margin: 22px;
    height: 65px;
    display: block;
    cursor: pointer;
    z-index: 100;
  }
  svg {
    display: none;
  }
  @media screen and (max-width: 800px) {
    svg {
      display: block;
      font-size: 2.3em;
      float: right;
      height: 65px;
      cursor: pointer;
    }
  }
`;
const Logo = styled.figure`
  padding: 20px 0;
  img {
    padding-top: 5px;
    width: 100px;
  }
  display: inline-block;
`;
const Linklist = styled.ul`
  float: right;
  height: 65px;
  li {
    height: 65px;
    display: inline-block;
    list-style: none;
    button {
      border: none;
      border-bottom: 0px solid transparent;
      margin: auto;
      background: transparent;
      cursor: pointer;
      @media (max-width: 800px) {
        width: 100%;
      }
    }
    a,
    button {
      font-size: 1em;
      line-height: 65px;
      position: relative;
      height: 65px;
      display: block;
      color: #111;
      padding: 0 20px;
      border-bottom: 0px solid transparent;
      transition: border 0.3s;
      :hover,
      :active {
        border-bottom: 4px solid #000;
      }
    }
  }
  @media screen and (max-width: 800px) {
    background: #fffc;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
    transition: height 0.4s;
    height: ${props => (props.open === true ? "190px" : 0)};
    li {
      display: block;
      text-align: center;
      a:hover {
        border: none;
      }
    }
  }
`;

class Nav extends React.Component {
  state = {
    showMenu: false
  };
  toggleHamburgerMenu = () => {
    let showMenu = this.state.showMenu;
    if (window.innerWidth < 800) {
      this.setState({ showMenu: !showMenu });
    }
  };
  handleLanguageChange = () => {
    this.props.changeLanguage();
    this.setState({ showMenu: false });
  };
  handleHomeButtonClick = () => {
    if (this.state.showMenu) {
      this.setState({ showMenu: false });
    }
  };
  render() {
    const language = this.props.language;
    let Menubutton = !this.state.showMenu ? (
      <IoIosMenu
        onClick={this.toggleHamburgerMenu}
        style={{ position: "relative" }}
      />
    ) : (
      <IoMdClose
        onClick={this.toggleHamburgerMenu}
        style={{ position: "relative" }}
      />
    );
    const Flag =
      language === "english" ? (
        <Flagicon code="NL" svg={true} />
      ) : (
        <Flagicon code="GB" svg={true} />
      );
    return (
      <Navigation>
        <Link to="/" onClick={this.handleHomeButtonClick}>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Link>
        <Linklist open={this.state.showMenu}>
          <li>
            <Link to="/projects" onClick={this.toggleHamburgerMenu}>
              <Ink />
              {language === "english" ? "Projects" : "Projecten"}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.toggleHamburgerMenu}>
              <Ink />
              Contact
            </Link>
          </li>
          <li>
            <button onClick={this.handleLanguageChange}>
              <Ink />
              {language === "english"
                ? "Switch to dutch"
                : "Switch to English"}{" "}
              {window.innerWidth > 800 ? Flag : null}
            </button>
          </li>
        </Linklist>
        {Menubutton}
      </Navigation>
    );
  }
}

export default Nav;
