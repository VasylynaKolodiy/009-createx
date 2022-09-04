import React from 'react'
import './Button.scss'
import { NavLink, Link } from "react-router-dom";
import {ReactComponent as Arrow} from '../../assets/img/button/arrow-inverse-large.svg';

const Button = ({title, type, color, length, link, withAddIcon}) => {
  return (
    <div className="buttonWrapper">
      { (link) ? (
        <button type={type} className={`button ${color} ${length}`} formAction='#'>
          <span>{title}</span>
          <Link className={`buttonlink`} to={link}>
          </Link>
          {withAddIcon && (
            <Arrow/>
          )}
        </button>
      ) : (
        <button type={type} className={`button ${color} ${length}`} formaction='#'>
          <span>{title}</span>
          {withAddIcon && (
            <Arrow/>
          )}
        </button>
      )
    }
    </div>
  )
};


export default Button;