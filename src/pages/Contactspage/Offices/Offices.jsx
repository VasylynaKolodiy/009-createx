import React from "react";
import './Offices.scss';


const dataOffices = [
  {
    city: 'New York, USA',
    address: '8502 Preston Rd. Inglewood, New York 98380',
    link: 'https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+New+York/@-39.1541326,174.2074521,15z',
    phone: '(405) 555-0128',
    email: 'hello@createx.com',
    shedule: 'Mon - Fri 9:00 - 18:00',
  },

  {
    city: 'New Jersey, USA',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    link: 'https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+New+York/@-39.1541326,174.2074521,15z',
    phone: '(808) 555-0111',
    email: 'hello@createx.com',
    shedule: 'Mon - Fri 9:00 - 18:00',
  },

  {
    city: 'San Francisco, USA',
    address: '8502 Preston Rd. Inglewood, San Francisco 98380',
    link: 'https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+New+York/@-39.1541326,174.2074521,15z',
    phone: '(505) 555-0125',
    email: 'hello@createx.com',
    shedule: 'Mon - Fri 10:00 - 19:00',
  },
]
const Offices = () => {
  return (
    <section className="offices">
      <div className="offices__container container">
        <h1 className="offices__title">
          Our offices
        </h1>
        <p className="offices__description">
          Give us a call, send us a note or visit our office. We can’t wait to hear from you!
        </p>

        <ul className="offices__list">
          {dataOffices.map((item, i) =>
            <li className="offices__item" key={i}>
              <h3 className="offices__city">
                {item.city}
              </h3>
              <p className="offices__address">
                {item.address}
              </p>
              <a className="offices__link" href={item.link} target="_blank"  rel="noreferrer" >
                See on the map
              </a>

              <div className="offices__phone info">
                <p className="offices__phone-label label">Call:</p>
                <a className="offices__phone-link link" href={'tel:' + item.phone}>{item.phone}</a>
              </div>

              <div className="offices__email info">
                <p className="offices__email-label label">Email:</p>
                <a className="offices__email-link link" href={'mailto:' + item.email}>{item.email}</a>
              </div>

              <div className="offices__shedule info">
                <p className="offices__shedule-label label">Schedule:</p>
                <p className="offices__shedule-link link">{item.shedule}</p>
              </div>


            </li>
          )}

        </ul>


      </div>
    </section>
  )
};

export default Offices