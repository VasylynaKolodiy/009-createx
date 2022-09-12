import React from 'react';
import './Decisions.scss';
import image from "../../../../assets/img/workpage/workdetailpage/decisions/image.jpg"


const data = [
  {description: 'Vitae ultrices ornare eu sed in est quisque duis id.',},
  {description: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',},
  {description: 'Mauris odio pellentesque commodo, diam.',},
  {description: 'Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.',},
  {description:  'At pharetra libero blandit risus, fringilla sed commodo diam.',},
  {description: 'Integer ultricies viverra ut enim viverra ut.',},
]


const Decisions = () => {
  return (
    <section className="decisions">
      <div className="decisions__container container">

        <div className="decisions__imgwrapper">
          <img className="decisions__img" src={image} alt="Decisions image"/>
        </div>

        <div className="decisions__info">
          <h1 className="decisions__info-title">
            Constructive decisions
          </h1>
          {data.map((item, i) =>
          <ul className="decisions__info-list" key={i}>
            <li className="decisions__info-item">
              {item.description}
            </li>
          </ul>
          )}
        </div>



      </div>
    </section>
  )
};
export default Decisions