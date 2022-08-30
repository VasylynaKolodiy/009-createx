import React from "react";
import './Portfolio.scss';

import Button from "../../../components/Button/Button";

import image1 from '../../../assets/img/homepage/portfolio/image1.jpg';
import image2 from '../../../assets/img/homepage/portfolio/image2.jpg';
import image3 from '../../../assets/img/homepage/portfolio/image3.jpg';

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Portfolio = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const data = [
    {
      link: '#',
      image: image1,
      title: 'Red Finger Building',
      description: 'Business Centers'
    },
    {
      link: '#',
      image: image2,
      title: 'Cubes Building',
      description: 'Business Centers'
    },
    {
      link: '#',
      image: image3,
      title: 'The Pencil Building',
      description: 'Stores & Malls'
    },

    {
      link: '#',
      image: image3,
      title: 'The Pencil Building',
      description: 'Stores & Malls'
    },
    {
      link: '#',
      image: image2,
      title: 'Cubes Building',
      description: 'Business Centers'
    },
    {
      link: '#',
      image: image1,
      title: 'Red Finger Building',
      description: 'Business Centers'
    }
  ]

  return (
    <section className="portfolio" >

      <div className="portfolio__container container">
        <h1 className="portfolio__title">
          Browse our selected projects and learn more about our work
        </h1>

        <div className="portfolio__slider">
          <Slider {...settings}>
          {data.map((item, i) =>
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

          <div className="portfolio__explore">
            <h3 className="portfolio__explore-title">
              Explore all our works
            </h3>
            <Button
              title='View portfolio'
              type='button'
              color='primary'
              length='large'
            />
          </div>

        </div>




      </div> {/*portfolio__container*/}
    </section>
  )
};

export default Portfolio


