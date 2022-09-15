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

import {ReactComponent as Client1} from '../../assets/img/homepage/clients/clientslogo1.svg';
import {ReactComponent as Client2} from '../../assets/img/homepage/clients/clientslogo2.svg';
import {ReactComponent as Client3} from '../../assets/img/homepage/clients/clientslogo3.svg';
import {ReactComponent as Client4} from '../../assets/img/homepage/clients/clientslogo4.svg';
import {ReactComponent as Client5} from '../../assets/img/homepage/clients/clientslogo5.svg';
import {ReactComponent as Client6} from '../../assets/img/homepage/clients/clientslogo6.svg';


const dataClients = [
  {
    link: "/",
    logo: <Client1/>
  },
  {
    link: "/",
    logo: <Client2/>
  },
  {
    link: "/",
    logo: <Client3/>
  },
  {
    link: "/",
    logo: <Client4/>
  },
  {
    link: "/",
    logo: <Client5/>
  },
  {
    link: "/",
    logo: <Client6/>
  }
]



const title = 'Browse our selected projects and learn more about our work'
const portfolioItemData = [
  {
    link: '/work/red-finger-building',
    image: image1,
    title: 'Red Finger Building',
    description: 'Business Centers'
  },
  {
    link: '/work/cubes-building',
    image: image2,
    title: 'Cubes Building',
    description: 'Business Centers'
  },
  {
    link: '/work/the-pencil-building',
    image: image3,
    title: 'The Pencil Building',
    description: 'Stores & Malls'
  },

  {
    link: '/work/the-pencil-building',
    image: image3,
    title: 'The Pencil Building',
    description: 'Stores & Malls'
  },
  {
    link: '/work/cubes-building',
    image: image2,
    title: 'Cubes Building',
    description: 'Business Centers'
  },
  {
    link: '/work/red-finger-building',
    image: image1,
    title: 'Red Finger Building',
    description: 'Business Centers'
  },
]

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

const Homepage = () => {
  return (
    <section className="homepage">
      <Heroslider/>
      <Video/>
      <OurSomething data={ourSomethingData}/>
      <Requestform/>
      <Services/>
      <Portfolio title={title} portfolioItemData={portfolioItemData}/>
      <Clients data={dataClients}/>
      <div className="homepage__background">
        <Testimonials/>
        <Figures/>
        <News/>
      </div>
    </section>
  )
};

export default Homepage