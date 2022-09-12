import React from "react";
import './Statistics.scss';

import {ReactComponent as Icon1} from '../../../assets/img/aboutuspage/statistics/icon1.svg';
import {ReactComponent as Icon2} from '../../../assets/img/aboutuspage/statistics/icon2.svg';
import {ReactComponent as Icon3} from '../../../assets/img/aboutuspage/statistics/icon3.svg';
import {ReactComponent as Icon4} from '../../../assets/img/aboutuspage/statistics/icon4.svg';

const data = [
  {
    icon: <Icon1/>,
    number: '60%',
    description: 'Clients on the recommendation of friends',
  },

  {
    icon: <Icon2/>,
    number: '2400+',
    description: 'Apartments renovated',
  },

  {
    icon: <Icon3/>,
    number: '670',
    description: 'Qualified specialists',
  },

  {
    icon: <Icon4/>,
    number: '150000+ m2',
    description: 'Finishing work was carried out',
  },
]


const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__container container">

        <ul className="statistics__list">
          {data.map((item, i) =>
          <li className="statistics__item"  key={i}>
            <div className="statistics__imgwrapper">
              {item.icon}
            </div>

            <div className="statistics__info">
              <h1 className="statistics__number">
                {item.number}
              </h1>
              <p className="statistics__description">
                {item.description}
              </p>
            </div>


          </li>


          )}

        </ul>


      </div>
    </section>
  )
};

export default Statistics