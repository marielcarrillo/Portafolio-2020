import React from 'react';
import ScrollIntoView from "react-scroll-into-view";

import Button from '../Button/Button';

import './Router.scss';

const RouterDom= ()=> {
    return(
            <div className='router'> 
                <ScrollIntoView selector="#skills">
                <Button value='Skills' />   
                </ScrollIntoView>   
                <ScrollIntoView selector="#devweb">        
                    <Button value='Desarrollo Web' /> 
                </ScrollIntoView>
                <ScrollIntoView selector="#design">
                    <Button value='Diseño' />
                </ScrollIntoView>                
                <ScrollIntoView selector="#contact">
                    <Button value='Contacto' /> 
                </ScrollIntoView>  
            </div>
    )
}
export default RouterDom