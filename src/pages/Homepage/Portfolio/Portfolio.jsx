import React from "react";
import './Portfolio.scss';

import Button from "../../../components/Button/Button";

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../../assets/img/homepage/portfolio/image1.jpg";
import image2 from "../../../assets/img/homepage/portfolio/image2.jpg";
import image3 from "../../../assets/img/homepage/portfolio/image3.jpg";
import Portfolioitem from "./Portfolioitem/Portfolioitem";


const portfolioItemData = [
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
  },
]

const Portfolio = () => {
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
          Browse our selected projects and learn more about our work
        </h1>

        <div className="portfolio__slider">
          <Slider {...settings}>
            {portfolioItemData.map((item, i) =>
              <Portfolioitem item={item}/>
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
              link='http://localhost:3000/work'
            />
          </div>

        </div>


      </div>
      {/*portfolio__container*/}
    </section>
  )
};

export default Portfolio


