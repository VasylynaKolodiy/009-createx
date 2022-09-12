import React from "react";
import './Breadcrumbs.scss';
import {Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {

  const location = useLocation();
  const data = location.pathname.split('/').slice(1);

  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs__container container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__first-item">
            <Link className="breadcrumbs__first-item-link" to='/'>Homepage</Link>
          </li>
          {data.map((item, i) =>
          <li className="breadcrumbs__item" key={i}>
            { i < (data.length-1) ?
              <Link className="breadcrumbs__item-link" to={`/${item}`} >
                {(item.charAt(0).toUpperCase() + item.slice(1)).replace('-', ' ')}
              </Link>
              :
              <span className="breadcrumbs__item-link">
                {(item.charAt(0).toUpperCase() + item.slice(1)).replace(/-/g, ' ')}
              </span>
            }

          </li>
            )}
        </ul>
      </div> {/*breadcrumbs__container*/}
    </section>
  )}

export default Breadcrumbs


