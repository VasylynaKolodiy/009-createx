import React from 'react';
import './Projectgoal.scss';

const data = [
  {
    details: 'LOCATION',
    info: '2464 Royal Ln. Mesa, New Jersey',
  },
  {
    details: 'CLIENT',
    info: 'Darlene Robertson',
  },
  {
    details: 'ARCHITECT',
    info: 'HIK Architecture',
  },
  {
    details: 'SIZE',
    info: '840 sq. feet',
  },
  {
    details: 'VALUE',
    info: '$2 million',
  },
  {
    details: 'COMPLETED',
    info: 'May 2020',
  },
]


const Projectgoal = () => {
  return (
    <section className="projectgoal">
      <div className="projectgoal__container container">

        <div className="projectgoal__subscribe">
          <h1 className="projectgoal__subscribe-title">
            Project goal
          </h1>
          <div className="projectgoal__subscribe-description">
            <p className="projectgoal__subscribe-description-tetx">
              Build a private house 840 sq. feet with a large living room, three bedrooms,
              two bathrooms, a terrace, a pool and a garage for two cars.
            </p>
            <p className="projectgoal__subscribe-description-tetx">
              Modern design and care for each family member to feel as comfortable as possible in the new home.
            </p>
          </div>
        </div>

        <div className="projectgoal__info">
          {data.map((item, i) =>
            <ul className="projectgoal__info-wrapper" key={i}>
              <li className="projectgoal__info-details">
                {item.details}
              </li>
              <li className="projectgoal__info-info">
                {item.info}
              </li>
            </ul>
          )}

        </div>
      </div>
    </section>
  )
};
export default Projectgoal