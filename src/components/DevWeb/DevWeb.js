import React,  { useState } from 'react';
import Modal from '../Modal/Modal'
import Button from '../Button/Button';
import './DevWeb.scss'
const DevWeb = () =>{
    const [status, setStatus] = useState(false);
    return(
        <div className='devweb' id='devweb'>
            { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
            <h1>Desarrollo Web</h1>
            <div className='devweb-btn'>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
            </div>
            
        </div>
    )
}

export default DevWeb