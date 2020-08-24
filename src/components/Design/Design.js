import React,  { useState } from 'react';
import ScrollIntoView from "react-scroll-into-view";
import DesignModal from '../Design/DesignModal'
import Modal from '../Modal/Modal'
import Button from '../Button/Button';

import './Design.scss';


const Design = () =>{
    const [status, setStatus] = useState(false);
    const [modal, setModal] = useState('carteles')
    return (
        <>
        <div className='design' id='design'>
            { status && (<Modal closeModal={() => setStatus(false)}> <DesignModal modal={modal}/> </Modal>)}
            <h1 className='main-titles'>Diseño Gráfico</h1>
            <div className='design-btn'>
                <Button value='Carteles' onClick={() => {setStatus(true); setModal('carteles')}}/>
                <Button value='Xapi' onClick={() => {setStatus(true); setModal('xapi')}}/>
                <Button value='Empty Spaces' onClick={() => {setStatus(true); setModal('empty')}}/>
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