import React from "react";
import './Quotation.scss';


import authorsphoto from '../../../assets/img/aboutuspage/quotation/authorsphoto.jpg';


const Quotation = () => {
  return (
    <section className="quotation">
      <div className="quotation__container container">

        <div className="quotation__imgwrapper">
          <img className="quotation__img" src={authorsphoto} alt="Quote image"/>
        </div>


        <figure className="quotation__figure">
          <blockquote className="quotation__blockquote" cite="Courtney Alexander">
            <p className="quotation__blockquote-text">
              Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in.
              Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non,
              massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi.
              Odio massa purus vel praesent arcu enim elit felis viverra.
            </p>
            <p className="quotation__blockquote-text">
              Magna aliquam interdum mattis ipsum arcu.
              Elit odio elit viverra quis metus amet eleifend amet.
              Vet suspendisse faucibus tempor ipsum integer.
            </p>
          </blockquote>
          <figcaption className="quotation__figcaption">Courtney Alexander<cite>CEO - Createx Construction Bureau</cite></figcaption>
        </figure>
        {/*<div className="quotation__signaturewrapper">*/}
        {/*  <img className="quotation__signature" src="" alt="Quote signature"/>*/}
        {/*</div>*/}



      </div>
    </section>
  )
};

export default Quotation