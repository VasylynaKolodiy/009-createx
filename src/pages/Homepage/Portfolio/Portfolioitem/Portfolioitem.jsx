import React from "react";
import './Portfolioitem.scss';
import Button from "../../../../components/Button/Button";


const Portfolioitem = ({item}) => {

  return (
    <section className="portfolioitem">


        <div className="portfolioitem__wrapper">

          <div className="portfolioitem__item">
            <a className="portfolioitem__link" href={item.link}>
            </a>
            <img className="portfolioitem__img" src={item.image} alt="Portfolioitem image"/>
            <div className="portfolioitem__info">
              <p className="portfolioitem__subtitle">{item.title}</p>
              <p className="portfolioitem__subtext">{item.description}</p>
              <div className="portfolioitem__button">
                <Button
                  title='View Project'
                  type='button'
                  color='inverse'
                  length='regular'
                />
              </div>
            </div>
          </div>
      </div>
      {/*portfolioitem__container*/}
    </section>
  )
};

export default Portfolioitem


