import React from "react";
import './Clients.scss';


const Clients = ({data}) => {

    return (
      <section className="clients">
        <div className="clients__container container">
          <h1 className="clients__title">
            Supported by 12+ partners
          </h1>

          <ul className="clients__list">
            {data.map((item, i) =>
              <li className="clients__item" key={i}>
                <a className="clients__link" href={item.link}>
                  {item.logo}
                </a>
              </li>
            )}
          </ul>
        </div> {/*clients__container*/}
      </section>
    )
  };

export default Clients


