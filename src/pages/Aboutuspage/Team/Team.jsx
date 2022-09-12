import React from "react";
import './Team.scss';
import { Link } from "react-router-dom";

import photo1 from "../../../assets/img/aboutuspage/team/photo1.jpg";
import photo2 from "../../../assets/img/aboutuspage/team/photo2.jpg";
import photo3 from "../../../assets/img/aboutuspage/team/photo3.jpg";
import photo4 from "../../../assets/img/aboutuspage/team/photo4.jpg";
import photo5 from "../../../assets/img/aboutuspage/team/photo5.jpg";
import photo6 from "../../../assets/img/aboutuspage/team/photo6.jpg";
import photo7 from "../../../assets/img/aboutuspage/team/photo7.jpg";
import photo8 from "../../../assets/img/aboutuspage/team/photo8.jpg";


import {ReactComponent as LinkedIn} from '../../../assets/img/aboutuspage/team/linkedin.svg';
import {ReactComponent as Twitter} from '../../../assets/img/aboutuspage/team/twitter.svg';
import {ReactComponent as FaceBook} from '../../../assets/img/aboutuspage/team/facebook.svg';

const dataTeam = [
  {
    itemLink: '#',
    photo: photo1,
    itemName: 'Courtney Alexander',
    itemPosition: 'CEO, Co-Founder',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo2,
    itemName: 'Calvin Fox',
    itemPosition: 'CTO, Co-Founder',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo3,
    itemName: 'Johnny Lane',
    itemPosition: 'Commercial Manager',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo4,
    itemName: 'Diane Mccoy',
    itemPosition: 'Director of Human Resources',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo5,
    itemName: 'Judith Warren',
    itemPosition: 'Lead Accountant',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo6,
    itemName: 'Floyd Simmmons',
    itemPosition: 'Finacial Director',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo7,
    itemName: 'Serenity Edwards',
    itemPosition: 'Director of Marketing',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },
  {
    itemLink: '#',
    photo: photo8,
    itemName: 'Shawn Edwards',
    itemPosition: 'Tech Lead',
    linkedinLink: '#',
    twitterLink: '#',
    facebookLink:'#',
  },

]
const Team = () => {

  return (
    <section className="team">
      <div className="team__container container">

        <h1 className="team__title">
          Our team
        </h1>
        <p className="team__description">
          People are at the heart of Createx Construction Bureau
        </p>
        <div className="team__listwrapper">
          {dataTeam.map((item, i) =>
            <ul className="team__list" key={i}>
              <li className="team__item">
                <a className="team__item-link" href={item.itemLink}>
                </a>

                <div className="team__item_imgwrapper">
                  <img className="team__item_img" src={item.photo} alt="Photo" />

                  <div className="team__item-social">

                    <div className="team__item-social-linkedin">
                      <a className="team__item-social-linkedin-link" href={item.twitterLink}>
                        <LinkedIn/>
                      </a>
                    </div>


                    <div className="team__item-social-twitter">
                      <a className="team__item-social-twitter-link" href={item.twitterLink}>
                        <Twitter/>
                      </a>
                    </div>

                    <div className="team__item-social-facebook">
                      <a className="team__item-social-facebook-link" href={item.facebookLink}>
                        <FaceBook/>
                      </a>
                    </div>

                  </div>
                </div>

                <div className="team__item-info">
                  <p className="team__item-name">
                    {item.itemName}
                  </p>

                  <p className="team__item-position">
                    {item.itemPosition}
                  </p>
                </div>

              </li>
            </ul>
          )}

        </div>


        <div className="team__text">
          <p className="team__text-description">
            Become a part of the best team in the construction market of the USA.
          </p>
          <Link className="team__text-link" to="/about-us/available-positions">
            Available Positions
          </Link>
        </div>


      </div>
    </section>
  )
};

export default Team