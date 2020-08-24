import React from 'react';
import './Design.scss';

const DesignModal = ({modal})=> {
    if(modal=== 'carteles'){
        return(
            <div className='design-modal-container'>
                <div className='design-txt-container'>
                    <h1 className='modal-titles'>Colección de Carteles</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Coleccion de carteles para asociación civil dedicada al desarrollo social</p>          
                </div>
                <div className='dev-img'>
                    <img  src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/c47d4d60586661.5a52dcad15ebc.jpg' alt='bazar'></img>
                </div>
            </div>   
        )
    }else if (modal=== 'xapi'){
        return(
            <div className='dev-modal-container'>
                <div className='dev-txt-container'>
                    <h1 className='modal-titles'>Xapi</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Tipografía modular inspirada en bordados huicholes</p>         
                </div>
                <div className='dev-img'>
                    <img className='img' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/786f0a60412947.5a4c4ff4e7190.jpg" alt="xapi" />
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dc48cf60412947.5a4c4ff4e61ed.gif" alt="xapi-gif" />
                </div>
            </div>   
        )

    }else if (modal === 'empty'){
        return(
            <div className='dev-modal-container'>
                <div className='dev-txt-container'>
                    <h1 className='modal-titles'>Empty Spaces</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Serie fotográfica inspirada en la estética del abandono</p>           
                </div>
                <div className='dev-img'>
                    <img className='img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/05647360524499.5a4febd3b38fc.jpg' alt='gra'></img>
                    <img className='img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/395a1d60524499.5a4febd3b3c8e.png' alt='ffi'></img>
                    <img className='img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8c28ff60524499.5a4febd3b432f.jpg' alt='ti'></img>

                </div>
            </div>   
        )
    }

}

export default DesignModal