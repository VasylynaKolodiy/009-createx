import React from "react";
import './Newspage.scss';
import Pagetitle from "../../components/Pagetitle/Pagetitle";
import newspageBg from '../../assets/img/newspage/newspage-bg.png';
import Category from "./Category/Category";

const Newspage = () => {
  return (
    <section className="newspage">
      <Pagetitle
        description='Stay tuned with our news, expert tips and articles.'
        background={newspageBg}
      />
      <Category/>
     
    </section>
  )
};

export default Newspage