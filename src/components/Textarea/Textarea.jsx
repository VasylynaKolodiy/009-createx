import React from 'react'
import './Textarea.scss'


const Textarea = ({id, placeholder, length, color, rows, label}) => {

  return (
    <div className="textareaWrapper">
      <textarea className={`textarea ${length} ${color}`} id={id} rows={rows} placeholder={placeholder}/>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
    </div>
  )
};




export default Textarea;