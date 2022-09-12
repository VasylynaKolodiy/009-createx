import React from "react";
import './Metadescription.scss';


import {ReactComponent as Facebook} from '../../../../assets/img/newspage/newsdetailpage/facebook.svg';
import {ReactComponent as Linkedin} from '../../../../assets/img/newspage/newsdetailpage/linkedin.svg';
import {ReactComponent as Twitter} from '../../../../assets/img/newspage/newsdetailpage/twitter.svg';

const Metadescription = () => {
  return (
    <section className="metadescription">
      <div className="metadescription__container container">
        <div className="metadescription__description">
          <div className="newsitem__item-meta">
              <span className="newsitem__item-meta-category">
                Industry News
              </span>
            <span className="newsitem__item-meta-data">
                June 24, 2020
              </span>
            <span className="newsitem__item-meta-comments">
                4 comments
              </span>
          </div>

          <div className="metadescription__social">
            <a className="metadescription__social-facebook">
              <Facebook/>
            </a>
            <a className="metadescription__social-linkedin">
              <Linkedin/>
            </a>
            <a className="metadescription__social-twitter">
              <Twitter/>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Metadescription