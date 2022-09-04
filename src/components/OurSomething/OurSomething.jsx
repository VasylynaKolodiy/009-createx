import React from "react";
import './OurSomething.scss';

const OurSomething = ({data}) => {
  return (
    <section className={`our-something ${data.color}`} >
      <div className="container our-something__container">
        <h1 className="our-something__title">
          {data.title}
        </h1>
        <p className="our-something__text">
          {data.description}
        </p>

        <ul className="our-something__list" >
          {data.items.map((item, i) =>
          <li className="our-something__item" key={i}>
              {item.icon}
            <p className="our-something__item-title">
              {item.subtitle}
            </p>
            <p className="our-something__item-text">
              {item.subdescription}
            </p>
          </li>
          )}
        </ul>

      </div> {/*our-something__container*/}
    </section>
  )
};

export default OurSomething