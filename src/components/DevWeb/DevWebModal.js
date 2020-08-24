import React from 'react';
import './DevWeb.scss';

const DevWebModal = ({modal})=> {
    if(modal=== 'cipher'){
        return(
            <div className='dev-modal-container'>
                <div className='dev-txt-container'>
                    <h1 className='modal-titles'>¿Qué dices César?</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Es un sitio web para todo tipo de personas que requieran compartir mensajes secretos o privados de forma rápida y fácil.</p>
                    <div className='dev-links'>
                        <a href='https://marielcarrillo.github.io/CDMX009-cipher/'>Demo</a>
                        <a href='https://github.com/marielcarrillo/CDMX009-cipher'>GitHub</a>
                    </div>           
                </div>
                <div className='dev-img'>
                    <img id='cipher-img' src='https://raw.githubusercontent.com/marielcarrillo/CDMX009-cipher/master/img/pantallaPrincipal.png' alt='cipher'></img>
                </div>
            </div>   
        )
    }else if (modal=== 'bichigram'){
        return(
            <div className='dev-modal-container'>
                <div className='dev-txt-container'>
                    <h1 className='modal-titles'>Bichigram</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Bichigram es una red social dirigida a cualquier persona interesada en los artrópodos para a ayudar a otros a identificar, catalogar y aprender sobre ellos.
                        La aplicación fue creada con un enfoque mobile first, y para la implementación se utilizó HTML5, SASS, Vanilla JS y Firebase.</p>
                    <div className='dev-links'>
                        <a href='https://serene-goldwasser-a1ad9a.netlify.app/?#/login'>Demo</a>
                        <a href='https://github.com/marielcarrillo/CDMX009-Social-Network'>GitHub</a>
                    </div>           
                </div>
                <div className='dev-img'>
                    <img src="https://i.gyazo.com/7ff064b8e8aed4ba24e97f9c475d1f5d.gif" alt="bichi" width="272"/>
                </div>
            </div>   
        )

    }else if (modal === 'burgerqueen'){
        return(
            <div className='dev-modal-container'>
                <div className='dev-txt-container'>
                    <h1 className='modal-titles'>BurgerQueen</h1>                            
                </div>
                <div className='dev-info-container'>
                    <p>Es una interfaz para un pequeño restaurante de hamburguesas que está creciendo, el cual requiere poder tomar pedidos mediante una tablet para poder enviarlos a la cocina de manera ordenada.
                    La aplicación cuenta con dos menús y las secciones de Orden, donde el mesero podrá realizar el pedido; Cocina donde podrán visualizar la orden seleccionada e indicar cuando se ha terminado de hacer; e Historial donde se indica que la orden ya fue pagada y se pueden consultar todas las ordenes que han sido ingresadas.</p>
                    <div className='dev-links'>
                        <a href='https://burgerqueen-d2dca.web.app/'>Demo</a>
                        <a href='https://github.com/marielcarrillo/burger-queen'>GitHub</a>
                    </div>           
                </div>
                <div className='dev-img'>
                    <img src='https://raw.githubusercontent.com/marielcarrillo/burger-queen/master/src/Assets/recurso.png' alt='bq'></img>
                </div>
            </div>   
        )
    }

}

export default DevWebModal