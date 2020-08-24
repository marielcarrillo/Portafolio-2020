import React,  { useState } from 'react';
import Modal from '../Modal/Modal'
import DevWebModal from '../DevWeb/DevWebModal'
import Button from '../Button/Button';
import './DevWeb.scss'
const DevWeb = () =>{
    const [status, setStatus] = useState(false);
    const [modal, setModal] = useState('cipher')
    return(
        <div className='devweb' id='devweb'>
            { status && (<Modal closeModal={() => setStatus(false)}><DevWebModal modal={modal}/></Modal>)}
            <h1 className='main-titles'>Desarrollo Web</h1>
            <div className='devweb-btn'>
                <Button value='¿?' onClick={() => {setStatus(true); setModal('cipher')}}/>
                <Button value='Bichigram' onClick={() => {setStatus(true); setModal('bichigram')}}/>
                <Button value='BurgerQueen' onClick={() => {setStatus(true); setModal('burgerqueen')}}/>
                {/* <Button onClick={() => setStatus(true)}/> */}
            </div>
            
        </div>
    )
}

export default DevWeb