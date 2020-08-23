import React from 'react';
import './Skills.scss';
import ae from '../../assets/skills/ae.png'
import ai from '../../assets/skills/ai.png'
import ant from '../../assets/skills/ant.png'
import css from '../../assets/skills/css.png'
import figma from '../../assets/skills/figma.png'
import git from '../../assets/skills/git.png'
import html from '../../assets/skills/html.png'
import id from '../../assets/skills/id.png'
import js from '../../assets/skills/js.png'
import node from '../../assets/skills/node.png'
import pr from '../../assets/skills/pr.png'
import ps from '../../assets/skills/ps.png'
import react from '../../assets/skills/react.png'
import sass from '../../assets/skills/sass.png'




const SkillsModal = ({modal})=>{
    if(modal==='devSkills'){
        return(
            <div className='skills-modal-container'>
                <div className='skills-txt-container'>
                    <h1 className='modal-titles'>Skills Desarrollo Web:</h1>                            
                </div>
                <div className='skills-img-container'>
                    <img src={html} className='skills-img' alt={html}></img>              
                    <img src={css} className='skills-img' alt={css}></img>
                    <img src={js} className='skills-img' alt={js}></img>                 
                    <img src={sass} className='skills-img' alt={sass}></img>                
                    <img src={react} className='skills-img' alt={react}></img>
                    <img src={ant} className='skills-img' alt={ant}></img>
                    <img src={git} className='skills-img' alt={git}></img>
                    <img src={node} className='skills-img' alt={node}></img>
                </div>
            </div>   
        )
    } else{
    return(
        <div className='skills-modal-container'>
        <div className='skills-txt-container'>
            <h1 className='modal-titles'>Skills Diseño:</h1>
        </div>
        <div className='skills-img-container'>
            <img src={ai} className='skills-img' alt={ai}></img>
            <img src={ps} className='skills-img' alt={ps}></img>
            <img src={ae} className='skills-img' alt={ae}></img>
            <img src={pr} className='skills-img' alt={pr}></img>
            <img src={id} className='skills-img' alt={id}></img>
            <img src={figma} className='skills-img' alt={figma}></img>
            
        </div>
    </div>
    )
    }
}

export default SkillsModal;