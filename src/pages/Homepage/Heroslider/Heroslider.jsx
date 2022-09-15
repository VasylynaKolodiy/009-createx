import React from "react";
import './Heroslider.scss';

import sliderBg from '../../../assets/img/homepage/heroslider/bg-image.jpg';
import Button from "../../../components/Button/Button";

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    imageUrl: sliderBg,
    title: 'CREATEX CONSTRUCTION',
    description: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.'
  },
  {
    imageUrl: sliderBg,
    title: 'CREATEX CONSTRUCTION',
    description: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.'
  },
  {
    imageUrl: sliderBg,
    title: 'CREATEX CONSTRUCTION',
    description: 'Cras g df gfdultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.'
  },
  {
    imageUrl: sliderBg,
    title: 'CREATEX CONSTghRUCTION',
    description: 'Cras g df gfdultrices leogf vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.'
  },
]


const Heroslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="heroslider" >
      <Slider {...settings}>
        {data.map((item, i) =>
          <div className="heroslider__container" key={i}>
            <div className="heroslider__wrapper" style={{ backgroundImage: `url(${item.imageUrl})`,
              backgroundRepeat: 'no-repeat'}}>
              <div className="heroslider__slider container">
                <p className="heroslider__logotext">{item.title}</p>
                <p className="heroslider__text">{item.description}</p>
                <Button
                  title='Learn more about us'
                  type='button'
                  color='inverse'
                  length='large'
                  link = '/about-us'
                />
                <Button
                  title='SUBMIT REQUEST'
                  type='submit'
                  color='primary'
                  length='large'
                />
              </div>
            </div>
          </div>
        )}
       {/*heroslider__container*/}
      </Slider>
    </section>
  )
};

export default Heroslider


