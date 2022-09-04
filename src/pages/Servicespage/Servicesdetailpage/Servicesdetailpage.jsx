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


const relatedProjectsData = {
  title: 'Related projects',
  items: [
    {
      link: '#',
      image: relatedProjectsimage1,
      title: 'Kids Bedroom With Decorations',
      description: 'Apartments & flats'
    },
    {
      link: '#',
      image: relatedProjectsimage2,
      title: 'Modern Double Bedroom',
      description: 'Apartments & flats'
    },
    {
      link: '#',
      image: relatedProjectsimage3,
      title: 'Scandinavian Style Interior',
      description: 'Private houses'
    },

    {
      link: '#',
      image: relatedProjectsimage3,
      title: 'Scandinavian Style Interior',
      description: 'Private houses'
    },
    {
      link: '#',
      image: relatedProjectsimage2,
      title: 'Modern Double Bedroom',
      description: 'Apartments & flats'
    },
    {
      link: '#',
      image: relatedProjectsimage1,
      title: 'Kids Bedroom With Decorations',
      description: 'Apartments & flats'
    }
  ]
}

const Servicesdetailpage = () => {
  return (
    <section className="servicesdetailpage">
        <Pagetitle
          title= 'INTERIOR DESIGN'
          description='Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.'
          background = {servicesBg}
        />
        <Weoffer/>
        <Steps/>
      <OurSomething data={ourBenefitsdata}/>
      <Portfolio data={relatedProjectsData}/>
      <Pricing/>
      <Clients/>




        

    </section>
  )
};

export default Servicesdetailpage


