import React from "react";
import './OurSomething.scss';

import {ReactComponent as Quality} from '../../assets/img/our-something/quality.svg';
import {ReactComponent as Comfort} from '../../assets/img/our-something/comfort.svg';
import {ReactComponent as Safety} from '../../assets/img/our-something/safety.svg';


const data =
  {
    title: 'Our core values',
    description: 'Our mission is to set the highest standards for construction sphere.',
    items: [
      {
        icon: <Quality/>,
        subtitle: 'Quality',
        subdescription: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
      },
      {
        icon: <Comfort/>,
        subtitle: 'Comfort',
        subdescription: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
      },
      {
        icon: <Safety/>,
        subtitle: 'Safety',
        subdescription: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
      }
    ]
  }




const OurSomething = () => {
  return (
    <section className="our-something">
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