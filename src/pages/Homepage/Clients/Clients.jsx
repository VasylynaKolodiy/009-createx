import React from "react";
import './Clients.scss';

import {ReactComponent as Client1} from '../../../assets/img/homepage/clients/clientslogo1.svg';
import {ReactComponent as Client2} from '../../../assets/img/homepage/clients/clientslogo2.svg';
import {ReactComponent as Client3} from '../../../assets/img/homepage/clients/clientslogo3.svg';
import {ReactComponent as Client4} from '../../../assets/img/homepage/clients/clientslogo4.svg';
import {ReactComponent as Client5} from '../../../assets/img/homepage/clients/clientslogo5.svg';
import {ReactComponent as Client6} from '../../../assets/img/homepage/clients/clientslogo6.svg';

const data = [
  {
    link: "#",
    logo: <Client1/>
  },
  {
    link: "dfgdf#",
    logo: <Client2/>
  },
  {
    link: "#",
    logo: <Client3/>
  },
  {
    link: "#",
    logo: <Client4/>
  },
  {
    link: "#",
    logo: <Client5/>
  },
  {
    link: "#",
    logo: <Client6/>
  }
]

const Clients = () => {

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


