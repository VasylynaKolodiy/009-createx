import React from "react";
import './Testimonials.scss';

import profileImg from '../../../assets/img/homepage/testimonials/profile-image.png';
import imageBg from '../../../assets/img/homepage/testimonials/image.jpg';

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const profile = [
  {
    image: profileImg,
    comment: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.',
    name: 'Shawn Edwards',
    link: '#',
    company: 'Position, Company name'
  },
  {
    image: profileImg,
    comment: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.',
    link: '#',
    name: 'Shawn Edwards',
    company: 'Position, Company name'
  }
  ]



const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="testimonials">
      <div className="testimonials__container container">
        <div className="testimonials__left-part">
          <h1 className="testimonials__title">
            What our clients are saying
          </h1>
          <Slider {...settings}>
          {profile.map((item, i) =>
          <div className="testimonials__item" key={i}>
            <img className="testimonials__profile-img" src={item.image} alt="Profile image"/>
            <p className="testimonials__profile-comment">
              {item.comment}
            </p>
            <a className="testimonials__profile-name" href={item.link}>
              {item.name}
            </a>
            <p className="testimonials__profile-company">
              {item.company}
            </p>
          </div>
          )}
          </Slider>
        </div>


        <div className="testimonials__right-part">
          <img className="testimonials__img" src={imageBg} alt="Testimonials image" />
        </div>

      </div> {/*testimonials__container*/}
    </section>
  )
};

export default Testimonials


