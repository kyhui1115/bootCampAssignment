import { BiListUl } from "react-icons/bi";
import styled from "styled-components";
import "../App.css";
import logo_svg from "../icon/codestates2.png";
import { ReactComponent as TopIcon } from "../icon/top_icon.svg";
import React, { useState } from "react";

const TopButton = styled.div`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background-color: #bfd780;
  box-shadow: 2px 4px 7px 1px #00000012;
  bottom: 24px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: block;
  &.hidden {
    display: none;
  }
  svg {
    padding: 12px 18px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  background-color: rgb(142, 175, 218);
  width: 100%;
  height: 100%;
  padding: 0 8px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .logo {
    height: 100%;
    margin-top: 15px;
    padding: 12px;
    position: absolute;
    left: 0px;
    .logo_icon {
      margin-top: 5px;
      height: 24px;
    }
  }

  .nav_PC {
    li {
      float: left;
      font-size: 30px;
      margin-top: 20px;
      margin-left: 50px;

      &:first-child {
        margin-left: 0px;
      }
    }
  }

  .nav_Mobile {
    display: none;
  }

  button {
    display: none;
  }

  @media screen and (max-width: 720px) {
    .nav_PC {
      opacity: 0;
    }

    .nav_Mobile {
      background-color: rgb(142, 175, 218);
      display: block;
      position: absolute;
      top: 56px;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin-bottom: 20px;
        font-size: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    button {
      display: block;
      margin-top: 5px;
      width: 60px;
      height: 50px;
      position: absolute;
      right: 15px;
      padding-top: 5px;
      font-size: 40px;
      cursor: pointer;
      border: 0;
      outline: 0;
      background-color: inherit;
    }
  }
`;

const Nav = () => {
  // const [menu, setMenu] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuOpen = () => {
    setMenu(!menu);
  };

  return (
    <>
      <TopButton>
        <TopIcon></TopIcon>
      </TopButton>
      <div className="header">
        <Wrapper>
          <div className="logo">
            <img src={logo_svg} className="logo_icon" alt="logo_icon" />
          </div>
          <nav className="nav_PC">
            <ul>
              <li>공지사항</li>
              <li>자유게시판</li>
              <li>FAQ</li>
              <li>기타</li>
            </ul>
          </nav>
          <button onClick={menuOpen}>
            <BiListUl />
          </button>
          {menu ? (
            <nav className="nav_Mobile">
              <ul>
                <li>공지사항</li>
                <li>자유게시판</li>
                <li>FAQ</li>
                <li>기타</li>
              </ul>
            </nav>
          ) : null}
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
