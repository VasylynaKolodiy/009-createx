import React from 'react'
import './Button.scss'
import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from '../../assets/img/button/arrow-inverse-large.svg';

const Button = ({title, type, color, length, link, withAddIcon, onClick}) => {
  return (
    <div className="buttonWrapper">
      { (link) ? (
        <button type={type} className={`button ${color} ${length}`} onClick={onClick}>
          <span>{title}</span>
          <Link className={`buttonlink`} to={link}>
          </Link>
          {withAddIcon && (
            <Arrow/>
          )}
        </button>
      ) : (
        <button type={type} className={`button ${color} ${length}`}>
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