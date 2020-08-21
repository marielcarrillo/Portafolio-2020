import React,  { useState } from 'react';
import ScrollIntoView from "react-scroll-into-view";

import Modal from '../Modal/Modal'
import Button from '../Button/Button';

import './Design.scss';

const Design = () =>{
    const [status, setStatus] = useState(false);
    return (
        <>
        <div className='design' id='design'>
            { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
            <h1>Diseño Gráfico</h1>
            <div className='design-btn'>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
            </div>
        </div>
        <div className='back'>
        <ScrollIntoView selector='#about'>
            <Button value='Regresar'/>
        </ScrollIntoView>
        </div>
        </>
    )
}

export default Design