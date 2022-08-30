import React from "react";
import './Header.scss';
import { NavLink, Link } from "react-router-dom";

import logo from '../../assets/img/logo.svg';
import iphone from '../../assets/img/iphone.svg';
import chat from '../../assets/img/chat.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          <div className="header__logo">
            <a className="header__logo-link" href="#">
              <img className="header__logo-img" src={logo} alt="Header logo" />
            </a>
          </div>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                {/*<a className="header__menu-item-link" href="#">*/}
                {/*  About Us*/}
                {/*</a>*/}
                <NavLink className="header__menu-item-link" to="/">
                  About Us
                </NavLink>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-item-link" href="#">
                  Services
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-item-link" href="#">
                  Work
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-item-link" href="#">
                  News
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-item-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div> {/*header__left*/}

        <div className="header__right">
          <ul className="header__contacts-list">
            <li className="header__contacts-item">
              <div className="header__contacts-icon">
                <img className="header__contacts-img" src={iphone} alt="Telephone" />
              </div>
              <div className="header__contacts-info">
                <p className="header__contacts-label">
                  Call us
                </p>
                <a className="header__contacts-data" href="tel:4055550128">
                  (405) 555-0128
                </a>
              </div>
            </li>
            <li className="header__contacts-item">
              <div className="header__contacts-icon">
                <img className="header__contacts-img" src={chat} alt="Email" />
              </div>
              <div className="header__contacts-info">
                <p className="header__contacts-label">
                  Talk to us
                </p>
                <a className="header__contacts-data" href="mailto:hello@createx.com">
                  hello@createx.com
                </a>
              </div>
            </li>
          </ul>
        </div> {/*header__right*/}

      </div>
    </header>
  )
};

export default Header