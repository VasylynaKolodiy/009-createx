import React from "react";
import './Homepage.scss';
import Heroslider from "./Heroslider/Heroslider";
import OurSomething from "../../components/OurSomething/OurSomething";
import Video from "./Video/Video";
import Requestform from "./Requestform/Requestform";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Clients from "./Clients/Clients";
import Testimonials from "./Testimonials/Testimonials";
import Figures from "./Figures/Figures";
import News from "./News/News";
import {ReactComponent as Quality} from "../../assets/img/our-something/quality.svg";
import {ReactComponent as Comfort} from "../../assets/img/our-something/comfort.svg";
import {ReactComponent as Safety} from "../../assets/img/our-something/safety.svg";

import image1 from "../../assets/img/homepage/portfolio/image1.jpg";
import image2 from "../../assets/img/homepage/portfolio/image2.jpg";
import image3 from "../../assets/img/homepage/portfolio/image3.jpg";


const ourSomethingData =
  {
    title: 'Our core values',
    description: 'Our mission is to set the highest standards for construction sphere.',
    items: [
      {
        icon: <Quality/>,
        subtitle: 'Quality',
        subdescription: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
      },
      {
        icon: <Comfort/>,
        subtitle: 'Comfort',
        subdescription: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
      },
      {
        icon: <Safety/>,
        subtitle: 'Safety',
        subdescription: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
      }
    ]
  }

const portfolioData = {
  title: 'Browse our selected projects and learn more about our work',
  items: [
  {
    link: '#',
    image: image1,
    title: 'Red Finger Building',
    description: 'Business Centers'
  },
  {
    link: '#',
    image: image2,
    title: 'Cubes Building',
    description: 'Business Centers'
  },
  {
    link: '#',
    image: image3,
    title: 'The Pencil Building',
    description: 'Stores & Malls'
  },

  {
    link: '#',
    image: image3,
    title: 'The Pencil Building',
    description: 'Stores & Malls'
  },
  {
    link: '#',
    image: image2,
    title: 'Cubes Building',
    description: 'Business Centers'
  },
  {
    link: '#',
    image: image1,
    title: 'Red Finger Building',
    description: 'Business Centers'
  }
]
}


const Homepage = () => {
  return (
    <section className="homepage">
      <Heroslider/>
      <Video/>
      <OurSomething data={ourSomethingData}/>
      <Requestform/>
      <Services/>
      <Portfolio data={portfolioData}/>
      <Clients/>
      <div className="homepage__background">
        <Testimonials/>
        <Figures/>
        <News/>
      </div>
    </section>
  )
};

export default Homepage