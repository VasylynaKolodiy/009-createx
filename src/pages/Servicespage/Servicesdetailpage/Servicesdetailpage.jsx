import React from "react";
import './Servicesdetailpage.scss';
import Pagetitle from "../../../components/Pagetitle/Pagetitle";
import servicesBg from "../../../assets/img/pagetitle/backgrounddetailpage.png";
import Weoffer from "./Weoffer/Weoffer";
import Steps from "./Steps/Steps";
import OurSomething from "../../../components/OurSomething/OurSomething";

import {ReactComponent as Tearms} from "../../../assets/img/our-something/benefits/tearms.svg";
import {ReactComponent as Workers} from "../../../assets/img/our-something/benefits/workers.svg";
import {ReactComponent as Supervision} from "../../../assets/img/our-something/benefits/supervision.svg";
import relatedProjectsimage1 from "../../../assets/img/servicespage/relatedprojects/image1.jpg";
import relatedProjectsimage2 from "../../../assets/img/servicespage/relatedprojects/image2.jpg";
import relatedProjectsimage3 from "../../../assets/img/servicespage/relatedprojects/image3.jpg";
import Portfolio from "../../Homepage/Portfolio/Portfolio";
import Clients from "../../Homepage/Clients/Clients";
import Pricing from "./Pricing/Pricing";

import {ReactComponent as Client1} from '../../../assets/img/homepage/clients/clientslogo1.svg';
import {ReactComponent as Client2} from '../../../assets/img/homepage/clients/clientslogo2.svg';
import {ReactComponent as Client3} from '../../../assets/img/homepage/clients/clientslogo3.svg';
import {ReactComponent as Client4} from '../../../assets/img/homepage/clients/clientslogo4.svg';
import {ReactComponent as Client5} from '../../../assets/img/homepage/clients/clientslogo5.svg';
import {ReactComponent as Client6} from '../../../assets/img/homepage/clients/clientslogo6.svg';


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



const ourBenefitsdata =
  {
    title: 'Our benefits',
    description: 'Our mission is to set the highest standards for construction sphere.',
    color: 'dark',
    items: [
      {
        icon: <Tearms/>,
        subtitle: 'Fixed Terms & Cost',
        subdescription: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
      },
      {
        icon: <Workers/>,
        subtitle: 'Qualified Workers',
        subdescription: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
      },
      {
        icon: <Supervision/>,
        subtitle: 'Supervision & Control',
        subdescription: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
      }
    ]
  }

const title = 'Related projects'
const relatedProjectsData = [
  {
    link: '/work/kids-bedroom-with-decorations',
    image: relatedProjectsimage1,
    title: 'Kids Bedroom With Decorations',
    description: 'Apartments & flats'
  },
  {
    link: '/work/modern-double-bedroom',
    image: relatedProjectsimage2,
    title: 'Modern Double Bedroom',
    description: 'Apartments & flats'
  },
  {
    link: '/work/scandinavian-style-interior',
    image: relatedProjectsimage3,
    title: 'Scandinavian Style Interior',
    description: 'Private houses'
  },

  {
    link: '/work/scandinavian-style-interior',
    image: relatedProjectsimage3,
    title: 'Scandinavian Style Interior',
    description: 'Private houses'
  },
  {
    link: '/work/modern-double-bedroom',
    image: relatedProjectsimage2,
    title: 'Modern Double Bedroom',
    description: 'Apartments & flats'
  },
  {
    link: '/work/kids-bedroom-with-decorations',
    image: relatedProjectsimage1,
    title: 'Kids Bedroom With Decorations',
    description: 'Apartments & flats'
  }
]

const Servicesdetailpage = () => {
  return (
    <section className="servicesdetailpage">
      <Pagetitle
        description='Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.'
        background={servicesBg}
      />
      <Weoffer/>
      <Steps/>
      <OurSomething data={ourBenefitsdata}/>
      <Portfolio title={title} portfolioItemData={relatedProjectsData}/>
      <Pricing/>
      <Clients data={dataClients}/>
    </section>
  )
};

export default Servicesdetailpage


