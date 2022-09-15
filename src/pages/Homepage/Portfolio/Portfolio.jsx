import React from "react";
import './Portfolio.scss';

import Button from "../../../components/Button/Button";

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Portfolioitem from "./Portfolioitem/Portfolioitem";

const Portfolio = ({title, portfolioItemData}) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <section className="portfolio">
        <div className="portfolio__container container">
          <h1 className="portfolio__title">
            {/*Browse our selected projects and learn more about our work*/}
            {title}
          </h1>

          <div className="portfolio__slider">
            <Slider {...settings}>
              {portfolioItemData.map((item, i) =>
                <Portfolioitem item={item} key={i} />
              )}
            </Slider>

            <div className="explore">
              <h3 className="explore-title">
                Explore all our works
              </h3>
              <Button
                title='View portfolio'
                type='button'
                color='primary'
                length='large'
                link='/work'
              />
            </div>

          </div>


        </div>
        {/*portfolio__container*/}
      </section>
    )
  };

export default Portfolio


