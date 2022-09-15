import React from "react";
import './Services.scss';

import {ReactComponent as Construction} from '../../../assets/img/homepage/services/construction.svg';
import {ReactComponent as Development} from '../../../assets/img/homepage/services/project.svg';
import {ReactComponent as Design} from '../../../assets/img/homepage/services/design.svg';
import {ReactComponent as Repairs} from '../../../assets/img/homepage/services/repairs.svg';
import servicesBg from  '../../../assets/img/homepage/services/background-icon.jpg';

import Button from "../../../components/Button/Button";


const data = [
  {
    link: '/services/construction',
    icon: <Construction/>,
    description: 'Construction',
    background: servicesBg
  },
  {
    link: '/services/project-development',
    icon: <Development/>,
    description: 'Project Development',
    background: servicesBg
  },
  {
    link: '/services/interior-design',
    icon: <Design/>,
    description: 'Interior Design',
    background: servicesBg
  },
  {
    link: '/services/repairs',
    icon: <Repairs/>,
    description: 'Repairs',
    background: servicesBg
  }
]



const Services = () => {
  return (
    <section className="services">
      <div className="services__wrapper">
        <div className="container services__container">
          <h1 className="services__title">
            Our services
          </h1>
          <p className="services__text">
            Createx Construction Bureau is a construction giant with
            a full range of construction services.
          </p>
          <ul className="services__list">
            {data.map((item, i) =>
            <li className="services__item" key={i}>
              <a className="services__link" href={item.link}>
                <span className="services__over"/>
                <div className="services__group">
                  {item.icon}
                  <p className="services__description">
                    {item.description}
                  </p>
                </div>
              </a>
              <div className="services__bg">
                <img className="services__img" src={item.background} alt="Services background"/>
              </div>
            </li>
            )}
          </ul>

          <div className="services__learnblock">
            <h3 className="services__learn">
              Learn more about our services
            </h3>
            <Button
              title='View services'
              type='button'
              color='primary'
              length='large'
              link='/services'
            />
          </div>


        </div> {/*services__container*/}
      </div> {/*services__wrapper*/}
    </section>
  )
};

export default Services