import React,  { useState } from 'react';
import Modal from '../Modal/Modal'
import Button from '../Button/Button';
import SkillsModal from '../Skills/SkillsModal'
import '../Skills/Skills.scss'

const Skills = () =>{
    const [status, setStatus] = useState(false);
    const [modal, setModal] = useState('devSkills')
    return(
        <div className='skills' id='skills'>
            <div>
            { status && (<Modal closeModal={() => setStatus(false)}> <SkillsModal modal={modal} /></Modal>)}
                <h1 className='main-titles'>Skills</h1>
            </div>
            <div className='skills-btn'>
                <Button onClick={() => {setStatus(true); setModal('devSkills')}}/>
                <Button onClick={() => {setStatus(true); setModal('desingSkills')}}/>
            </div>
        </div>
    )
}

export default Skills