import React, {useState} from "react";
import './Workdetailpageslider.scss';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Workdetailpageslider = ({data}) => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className="workdetailpageslider">
      <div className="workdetailpageslider__container container">

        <div className="workdetailpageslider__slider">
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} slidesToShow={1}>
            {data.map((item, i) =>
              <div className="workdetailpageslider__container container" key={i}>
                <div className="workdetailpageslider__slider-imgwrapper">
                  <img className="workdetailpageslider__slider-img" src={item.image} alt="Slider image"/>
                </div>
              </div>
            )}
          </Slider>
        </div>

        <div className="workdetailpageslider__slider-small container">
          <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={data.length < 10 ? data.length : 10}
                  swipeToSlide={true}
                  focusOnSelect={true}>
            {data.map((item, i) =>
              <div className="workdetailpageslider__container-small" key={i}>
                <div className="workdetailpageslider__slider-small-imgwrapper">
                  <img className="workdetailpageslider__slider-small-img" src={item.image} alt="Slider image"/>
                </div>
              </div>
            )}
          </Slider>
        </div>

      </div> {/*workdetailpageslider__container*/}
    </section>
  )
}

export default Workdetailpageslider


