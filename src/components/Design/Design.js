import React,  { useState } from 'react';
import Modal from '../Modal/Modal'
import Button from '../Button/Button';

import './Design.scss';

const Design = () =>{
    const [status, setStatus] = useState(false);
    return (
        <div className='design' id='design'>
            { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
            <p>Diseño Gráfico</p>
            <div className='design-btn'>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
                <Button onClick={() => setStatus(true)}/>
            </div>
        </div>
    )
}

export default Design