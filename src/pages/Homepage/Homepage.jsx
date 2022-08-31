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


const Homepage = () => {
  return (
    <section className="homepage">
      <Heroslider/>
      <Video/>
      <OurSomething/>
      <Requestform/>
      <Services/>
      <Portfolio/>
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