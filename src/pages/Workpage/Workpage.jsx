import React from "react";
import './Workpage.scss';
import workpageBg from '../../assets/img/workpage/workpage-bg.png';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import Mediatabs from "./Mediatabs/Mediatabs";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import Clients from "../Homepage/Clients/Clients";


const Workpage = () => {
  return (
    <section className="workpage">
      <Pagetitle
        title='OUR WORK'
        description='Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.'
        background={workpageBg}
      />
      <Mediatabs/>
      <Testimonials/>
      <Clients/>
    </section>
  )
};

export default Workpage