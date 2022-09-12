import React from "react";
import './History.scss';

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage from "../../../assets/img/aboutuspage/history/slider-image.jpg";


const dataHistorySlider = [
  {
    image: sliderImage,
    description: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'Present',
  },
  {
    image: sliderImage,
    description: '2 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'March 2019',
  },
  {
    image: sliderImage,
    description: '3 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'November 2018',
  },
  {
    image: sliderImage,
    description: '4 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'July 2015',
  },
  {
    image: sliderImage,
    description: '5 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'August 2010',
  },
  {
    image: sliderImage,
    description: '6 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'February 2007',
  },
  {
    image: sliderImage,
    description: '7 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'May 2004',
  },
  {
    image: sliderImage,
    description: '8 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'October 2001',
  },
  {
    image: sliderImage,
    description: '9 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'June 2000',
  },



  {
    image: sliderImage,
    description: '10 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'February 2007',
  },
  {
    image: sliderImage,
    description: '11 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'May 2004',
  },
  {
    image: sliderImage,
    description: '12 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'October 2001',
  },
  {
    image: sliderImage,
    description: '13 Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
    content: 'June 2000',
  },
]

const History = () => {
  const settingsHistorySlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <h3>{dataHistorySlider[i].content}</h3>,
  };

  return (
    <section className="history">
      <div className="history__container container">
        <h1 className="history__title">
          Our history
        </h1>


        <Slider {...settingsHistorySlider}>
          {dataHistorySlider.map((item, i) =>
            <div className="historyslider__wrapper" key={i}>
              <div className="historyslider__inner">
                <div className="historyslider__imgwrapper">
                  <img className="historyslider__img" src={item.image} alt='History slider image'/>
                </div>
                <p className="historyslider__description">{item.description}</p>
              </div>
            </div>
          )}
        </Slider>


      </div>
    </section>
  )
};

export default History