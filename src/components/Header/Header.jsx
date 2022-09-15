import React, {useEffect, useState} from "react";
import './Header.scss';
import { NavLink, Link } from "react-router-dom";

import logo from '../../assets/img/logo.svg';
import iphone from '../../assets/img/iphone.svg';
import chat from '../../assets/img/chat.svg';

const Header = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 0));
  }, []);

  return (
    <header className={`header ${scroll ? 'fixed' : ''}`}>
      <div className="container header__container">
        <div className="header__left">
          <div className="header__logo">
            <Link className="header__logo-link" to="/">
              <img className="header__logo-img" src={logo} alt="Header logo"/>
            </Link>
          </div>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <NavLink className="header__menu-item-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="header__menu-item">
                <NavLink className="header__menu-item-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="header__menu-item">
                <NavLink className="header__menu-item-link" to="/work">
                  Work
                </NavLink>
              </li>
              <li className="header__menu-item">
                <NavLink className="header__menu-item-link" to="/news">
                  News
                </NavLink>
              </li>
              <li className="header__menu-item">
                <NavLink className="header__menu-item-link" to="/contacts">
                  Contacts
                </NavLink>
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