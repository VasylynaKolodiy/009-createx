import React from "react";
import './Map.scss';


import {ReactComponent as Mapimg} from '../../../assets/img/aboutuspage/map/map.svg';

const Map = () => {
 
  return (
    <section className="map">
      <div className="map__container container">
        <h1 className="map__title">
          We work worldwide
        </h1>
        <div className="map__map">
          <Mapimg/>
        </div>

      </div>
    </section>
  )
};

export default Map


