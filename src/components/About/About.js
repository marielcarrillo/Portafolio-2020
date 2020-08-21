import React from 'react';
import './About.scss'
import name from '../../assets/name.png'

const About = ()=> {
    return(
        <div id='about'>
            <img src={name} alt='Mariel' className='name-img'/>
        </div>
    )
}

export default About