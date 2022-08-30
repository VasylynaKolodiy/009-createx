import React from 'react'
import './Button.scss'
import {ReactComponent as Arrow} from '../../assets/img/button/arrow-inverse-large.svg';

const Button = ({title, type, color, length, withAddIcon}) => {
  return (
    <button type={type} className={`button ${color} ${length}`} >
      <span>{title}</span>
      {withAddIcon && (
        <Arrow/>
      )}
    </button>
  )
};




export default Button;