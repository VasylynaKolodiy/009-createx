import React from "react";
import './Pagetitle.scss';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useLocation} from "react-router-dom";

const Pagetitle = ({title, description, background}) => {
  const location = useLocation();
  const data = location.pathname.split('/').slice(-1);

  return (
    <section className="pagetitle" style={{ backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat'}}>
      <Breadcrumbs/>
      <div className="pagetitle__container container">
        <h1 className="pagetitle__title">
          {data[0].replace('-', ' ')}
          {/*{title}*/}
        </h1>
        <p className="pagetitle__description">
          {description}
        </p>

      </div> {/*pagetitle__container*/}
    </section>
  )
};

export default Pagetitle


