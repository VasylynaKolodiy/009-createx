import React from "react";
import './Workpage.scss';
import workpageBg from '../../assets/img/workpage/workpage-bg.png';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import Mediatabs from "./Mediatabs/Mediatabs";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import Clients from "../Homepage/Clients/Clients";

import {ReactComponent as Client1} from '../../assets/img/homepage/clients/clientslogo1.svg';
import {ReactComponent as Client2} from '../../assets/img/homepage/clients/clientslogo2.svg';
import {ReactComponent as Client3} from '../../assets/img/homepage/clients/clientslogo3.svg';
import {ReactComponent as Client4} from '../../assets/img/homepage/clients/clientslogo4.svg';
import {ReactComponent as Client5} from '../../assets/img/homepage/clients/clientslogo5.svg';
import {ReactComponent as Client6} from '../../assets/img/homepage/clients/clientslogo6.svg';


const dataClients = [
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

const Workpage = () => {
  return (
    <section className="workpage">
      <Pagetitle
        description='Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.'
        background={workpageBg}
      />
      <Mediatabs/>
      <Testimonials/>
      <Clients data={dataClients}/>


    </section>
  )
};

export default Workpage