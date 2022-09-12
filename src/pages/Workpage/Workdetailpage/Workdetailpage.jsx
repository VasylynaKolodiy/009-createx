import React from 'react';

import './Workdetailpage.scss';
import Pagetitle from "../../../components/Pagetitle/Pagetitle";
import sliderImg1 from '../../../assets/img/workpage/workdetailpage/slider1.jpg';
import sliderImg2 from '../../../assets/img/workpage/workdetailpage/slider2.jpg';
import sliderImg3 from '../../../assets/img/workpage/workdetailpage/slider3.jpg';
import sliderImg4 from '../../../assets/img/workpage/workdetailpage/slider4.jpg';
import sliderImg5 from '../../../assets/img/workpage/workdetailpage/slider5.jpg';
import sliderImg6 from '../../../assets/img/workpage/workdetailpage/slider6.jpg';
import sliderImg7 from '../../../assets/img/workpage/workdetailpage/slider7.jpg';
import sliderImg8 from '../../../assets/img/workpage/workdetailpage/slider8.jpg';
import sliderImg9 from '../../../assets/img/workpage/workdetailpage/slider9.jpg';
import sliderImg10 from '../../../assets/img/workpage/workdetailpage/slider10.jpg';
import sliderImg11 from '../../../assets/img/workpage/workdetailpage/slider11.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projectgoal from "./Projectgoal/Projectgoal";
import Decisions from "./Decisions/Decisions";
import Workdetailpageslider from "./Workdetailpageslider/Workdetailpageslider";
import Portfolio from "../../Homepage/Portfolio/Portfolio";
import portfoliocard1 from "../../../assets/img/workpage/workdetailpage/portfoliocard1.jpg";
import portfoliocard2 from "../../../assets/img/workpage/workdetailpage/portfoliocard2.jpg";
import portfoliocard3 from "../../../assets/img/workpage/workdetailpage/portfoliocard3.jpg";

const title = 'Similar projects'
const portfolioItemData = [
  {
    link: '#',
    image: portfoliocard1,
    title: 'Luxury Beach House',
    description: 'Private Houses'
  },
  {
    link: '#',
    image: portfoliocard2,
    title: 'Brown and Gray Painted House',
    description: 'Private Houses'
  },
  {
    link: '#',
    image: portfoliocard3,
    title: 'Scandinavian Style Interior',
    description: 'Scandinavian Style Interior'
  },

  {
    link: '#',
    image: portfoliocard1,
    title: 'Luxury Beach House',
    description: 'Private Houses'
  },
  {
    link: '#',
    image: portfoliocard2,
    title: 'Brown and Gray Painted House',
    description: 'Private Houses'
  },
  {
    link: '#',
    image: portfoliocard3,
    title: 'Scandinavian Style Interior',
    description: 'Scandinavian Style Interior'
  },
]

const data = [
  {image: sliderImg1,},
  {image: sliderImg2,},
  {image: sliderImg3,},
  {image: sliderImg4,},
  {image: sliderImg5,},
  {image: sliderImg6,},
  {image: sliderImg7,},
  {image: sliderImg8,},
  {image: sliderImg9,},
  {image: sliderImg10,},
  {image: sliderImg11,},
]


const Workdetailpage = () => {
  return (
    <section className="workdetailpage">
      <Pagetitle
        description=''
        background=''
      />
      <Workdetailpageslider data={data}/>


      <Projectgoal/>
      <Decisions/>
      <Portfolio title={title} portfolioItemData={portfolioItemData}/>
    </section>

  )
};
export default Workdetailpage



