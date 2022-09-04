import React from "react";
import './Footer.scss';
import footerLogo from '../../assets/img/footer/footer-logo.svg';
import heart from '../../assets/img/footer/heart.png';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import {ReactComponent as WhatsAppIcon} from '../../assets/img/footer/whatsapp.svg';
import {ReactComponent as MessangerIcon} from '../../assets/img/footer/messanger.svg';
import {ReactComponent as FacebookIcon} from '../../assets/img/footer/facebook.svg';
import {ReactComponent as TwitterIcon} from '../../assets/img/footer/twitter.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/img/footer/youtube.svg';
import {ReactComponent as TopButton} from '../../assets/img/footer/arrow-up.svg';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">

        <div className="footer__top">

          <div className="footer__top-left">
            <div className="footer__top-links">
              <a className="footer__logo-link" href="#">
                <img className="footer__logo-img" src={footerLogo} alt="Footer logo" />
              </a>

              <ul className="footer__social-list">
                <li className="footer__social-item">
                  <a className="footer__social-link" href="#">
                    <WhatsAppIcon/>
                  </a>
                </li>

                <li className="footer__social-item">
                  <a className="footer__social-link" href="#">
                    <MessangerIcon/>
                  </a>
                </li>

                <li className="footer__social-item">
                  <a className="footer__social-link" href="#">
                    <FacebookIcon/>
                  </a>
                </li>

                <li className="footer__social-item">
                  <a className="footer__social-link" href="#">
                    <YoutubeIcon/>
                  </a>
                </li>

                <li className="footer__social-item">
                  <a className="footer__social-link" href="#">
                    <TwitterIcon/>
                  </a>
                </li>
              </ul>
            </div>

            <p className="footer__info">
              Createx Construction Bureau has been successfully operating in the USA
              construction market since 2000. We are proud to offer you quality construction
              and exemplary service. Our mission is to set the highest standards for construction sphere.
            </p>
        <div className="footer__large">
            <div className="footer__address">

              <ul className="footer__address-list">
                <li className="footer__address-item">
                  <h6 className="footer__address-title">Head office</h6>
                </li>

                <li className="footer__address-item">
                  <p className="footer__address-label">
                    Address:
                  </p>
                  <a className="footer__address-link" href="https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+New+York/@-39.1541326,174.2074521,15.04z"
                     target="_blank">8502 Preston Rd. Inglewood, New York
                  </a>
                </li>

                <li className="footer__address-item">
                  <p className="footer__address-label">
                    Call:
                  </p>
                  <a className="footer__address-link" href="tel:4055550128">
                    (405) 555-0128
                  </a>
                </li>

                <li className="footer__address-item">
                  <p className="footer__address-label">
                    Email:
                  </p>
                  <a className="footer__address-link" href="mailto:hello@createx.com">
                    hello@createx.com
                  </a>
                </li>
              </ul> {/*footer__address-list*/}
            </div> {/*footer__address*/}


            <div className="footer__about">
              <ul className="footer__about-list">
                <li className="footer__about-item">
                  <h6 className="footer__about-title">WHO WE ARE</h6>
                </li>


                <li className="footer__about-item">
                  <a className="footer__about-link" href="#">
                    About Us
                  </a>
                </li>

                <li className="footer__about-item">
                  <a className="footer__about-link" href="#">
                    Available Positions
                  </a>
                </li>

                <li className="footer__about-item">
                  <a className="footer__about-link" href="#">
                    Contacts
                  </a>
                </li>
              </ul> {/*footer__about-list*/}
            </div> {/*footer__about*/}
          </div> {/*footer__large*/}
          </div> {/*footer__top-left*/}


          <div className="footer__top-right">
            <h4 className="footer__title">
              Let’s stay in touch
            </h4>

            <form className="footer__form" action="#">
              <Input
                id = "footer-email"
                placeholder = "Your email address"
                type = "email"
                length = "default"
                color = "dark"
              />

              <Button
                title='Subscribe'
                type='submit'
                color='primary'
                length='regular'
              />

            </form>

            <p className="footer__note">
              *Subscribe to our newsletter to receive communications
              and early updates from Createx Construction Bureau.
            </p>

            <div className="footer__experience">
              <ul className="footer__experience-list">
                <li className="footer__experience-item">
                  <h6 className="footer__experience-title">OUR EXPERIENCE</h6>
                </li>


                <li className="footer__experience-item">
                  <a className="footer__experience-link" href="#">
                    Services
                  </a>
                </li>

                <li className="footer__experience-item">
                  <a className="footer__experience-link" href="#">
                    Work
                  </a>
                </li>

                <li className="footer__experience-item">
                  <a className="footer__experience-link" href="#">
                    News
                  </a>
                </li>
              </ul> {/*footer__experience-list*/}
            </div> {/*footer__experience*/}
          </div> {/*footer__top-right*/}
        </div> {/*.footer__top*/}










        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © All rights reserved. Made with
              <span><img className="footer__copyright-heart" src={heart} /></span>
              by Createx Studio
            </p>
            <div className="footer__gototop">
              <p className="footer__gototop-link">
                Go to top
              </p>
              <button
                className="footer__gototop-btn"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                <TopButton/>
              </button>

            </div>

          </div>


        </div> {/*footer__bottom*/}
      </div> {/*footer__container*/}
    </footer>
  )
};

export default Footer