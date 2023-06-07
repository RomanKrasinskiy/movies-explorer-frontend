import React from 'react';
import './InputForm.css';


export default function InputForm({ type, name, required, label, spanText, temporaryClass, temporaryValue}) {
  return (
    <>
        <div className='input-form__form_group'>
            <input className= {`input-form__input ${ temporaryClass }`} placeholder=' ' type={type} name={name} value={temporaryValue} required={required}/>
            <label className='input-form__label'>{ label }</label>
            <span className='input-form__text-error'>{ spanText }</span>
        </div>
    </>
            
  )
}