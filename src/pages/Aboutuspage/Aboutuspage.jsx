import React from "react";
import './Aboutuspage.scss';
import aboutuspageBg from '../../assets/img/aboutuspage/aboutuspage-bg.png';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import Statistics from "./Statistics/Statistics";
import Quotation from "./Quotation/Quotation";
import OurSomething from "../../components/OurSomething/OurSomething";
import {ReactComponent as Quality} from "../../assets/img/our-something/quality.svg";
import {ReactComponent as Comfort} from "../../assets/img/our-something/comfort.svg";
import {ReactComponent as Safety} from "../../assets/img/our-something/safety.svg";
import History from "./History/History";
import Team from "./Team/Team";
import Clients from "../Homepage/Clients/Clients";
import {ReactComponent as Client1} from '../../assets/img/homepage/clients/clientslogo1.svg';
import {ReactComponent as Client2} from '../../assets/img/homepage/clients/clientslogo2.svg';
import {ReactComponent as Client3} from '../../assets/img/homepage/clients/clientslogo3.svg';
import {ReactComponent as Client4} from '../../assets/img/homepage/clients/clientslogo4.svg';
import {ReactComponent as Client5} from '../../assets/img/homepage/clients/clientslogo5.svg';
import {ReactComponent as Client6} from '../../assets/img/homepage/clients/clientslogo6.svg';
import Map from "./Map/Map";


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
  },


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

const ourSomethingData =
  {
    title: 'Our core values',
    description: 'Our mission is to set the highest standards for construction sphere.',
    items: [
      {
        icon: <Quality/>,
        subtitle: 'Quality',
        subdescription: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
      },
      {
        icon: <Safety/>,
        subtitle: 'Safety',
        subdescription: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
      },
      {
        icon: <Comfort/>,
        subtitle: 'Comfort',
        subdescription: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
      },
    ]
  }


const Aboutuspage = () => {
  return (
    <section className="aboutuspage">
      <Pagetitle
        description='Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.'
        background={aboutuspageBg}
      />
      <Statistics/>
      <Quotation/>
      <OurSomething data={ourSomethingData}/>
      <History/>
      <Clients data={dataClients}/>
      <Team/>
      <Map/>
    </section>
  )
};

export default Aboutuspage