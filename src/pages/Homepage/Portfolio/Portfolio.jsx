import React from "react";
import './Portfolio.scss';

import Button from "../../../components/Button/Button";

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = ({data}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <section className="portfolio" >
      <div className="portfolio__container container">
        <h1 className="portfolio__title">
          {data.title}
        </h1>

        <div className="portfolio__slider">
          <Slider {...settings}>
          {data.items.map((item, i) =>
                <div className="portfolio__item" key={i}>
                  <a className="portfolio__link" href={item.link}>
                  </a>
                  <img className="portfolio__img" src={item.image} alt="Portfolio image"/>
                  <div className="portfolio__info">
                    <p className="portfolio__subtitle">{item.title}</p>
                    <p className="portfolio__subtext">{item.description}</p>
                    <div className="portfolio__button">
                      <Button
                        title='View Project'
                        type='button'
                        color='inverse'
                        length='regular'
                      />
                    </div>
                  </div>
                </div>
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
              link = 'http://localhost:3000/work'
            />
          </div>

        </div>




      </div> {/*portfolio__container*/}
    </section>
  )
};

export default Portfolio


