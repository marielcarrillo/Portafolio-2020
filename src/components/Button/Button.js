import React from 'react';
import './Button.scss'

const Button = ({value, onClick})=>{
    return(
       
    <button className='button' onClick={onClick}>{value}</button>
   
    )
}

export default Button