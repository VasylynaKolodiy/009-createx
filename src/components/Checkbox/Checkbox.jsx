import React from 'react'
import './Checkbox.scss'


const Checkbox = ({id, value, label}) => {

  return (
    <div className="checkboxWrapper">
      <input type="checkbox" className={`checkbox`} id={id} value={value}/>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
    </div>
  )
};




export default Checkbox;