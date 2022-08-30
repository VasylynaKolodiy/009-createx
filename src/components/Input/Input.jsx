import React from 'react'
import './Input.scss'


const Input = ({id, placeholder, type, length, color, label}) => {

  return (
    <div className="inputWrapper">
      <input type={type} className={`input ${length} ${color}`} id={id} placeholder={placeholder}/>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
    </div>
  )
};




export default Input;