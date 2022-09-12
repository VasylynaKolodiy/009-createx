import React from "react";
import './Contactspage.scss';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import contactspageBg from '../../assets/img/contactspage/contactspage-bg.png';
import Contactform from "./Contactform/Contactform";


const Contactspage = () => {
  return (
    <section className="contactspage">
      <Pagetitle
        description='Contact us for all your construction needs. We always welcome any questions and comments.'
        background={contactspageBg}
      />
      <Contactform/>
    </section>
  )
};

export default Contactspage