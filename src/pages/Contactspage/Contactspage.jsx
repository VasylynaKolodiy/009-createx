import React from "react";
import './Contactspage.scss';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import contactspageBg from '../../assets/img/contactspage/contactspage-bg.png';
import Contactform from "./Contactform/Contactform";
import Offices from "./Offices/Offices";
import Follow from "./Follow/Follow";


const Contactspage = () => {
  return (
    <section className="contactspage">
      <Pagetitle
        description='Contact us for all your construction needs. We always welcome any questions and comments.'
        background={contactspageBg}
      />
      <Contactform/>
      <Offices/>
      <Follow/>
    </section>
  )
};

export default Contactspage