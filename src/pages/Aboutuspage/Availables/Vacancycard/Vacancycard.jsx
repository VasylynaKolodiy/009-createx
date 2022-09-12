import React from "react";
import './Vacancycard.scss';
import Button from "../../../../components/Button/Button";


const Vacancycard = ({item}) => {
  return (
    <section className="vacancycard">
      <div className="vacancycard__container container">
        <div className="vacancycard__item">
          <div className="vacancycard__info">
            <div className="vacancycard__meta">
              <p className="vacancycard__city">
                {item.city}
              </p>
              <p className="vacancycard__time">
                {item.time}
              </p>
            </div>
            <div className="vacancycard__position">
              <p className="vacancycard__name">
                {item.position}
              </p>
            </div>
          </div>

          <div className="vacancycard__button">
            <Button
              title='Apply now'
              type='button'
              color='inverse'
              length='regular'
              link={item.link}
            />
          </div>


        </div>


      </div>
    </section>
  )
};

export default Vacancycard