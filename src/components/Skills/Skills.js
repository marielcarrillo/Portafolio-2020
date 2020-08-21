import React,  { useState } from 'react';
import Modal from '../Modal/Modal'
import Button from '../Button/Button';
import '../Skills/Skills.scss'

const Skills = () =>{
    const [status, setStatus] = useState(false);
    return(
        <div className='skills' id='skills'>
            <div>
            { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
                <h1>Skills</h1>
            </div>
            <div className='skills-btn'>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
            </div>
        </div>
    )
}

export default Skills