import React from "react";
import './Servicespage.scss';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import Construction from "./Construction/Construction";

import servicesBg from '../../assets/img/pagetitle/background.png';


const Servicespage = () => {
  return (
    <section className="services">
      <Pagetitle
        title= 'SERVICES'
        description='If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.'
        background = {servicesBg}
      />
      <Construction/>
    </section>
  )
};

export default Servicespage