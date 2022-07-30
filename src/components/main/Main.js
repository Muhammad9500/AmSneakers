import React, {useState} from 'react'
import Yeezy from "./img/Yeezy2.png"

import "./Main.css"
const Main = ({setModalCheckout}) => {
    const openModalCheckout = () => {
        setModalCheckout(true)
    }
    return (
        <div className='main_container'>
            <div className='main_txtAndButton-container'>
                <h1 className='main_title'>Adidas Yeezy</h1>
                <p className='main_description'>Наша Команда <b>AM</b> отбирает модели<br/>
                наилучшего качества, не отличимые от<br/>
                оригинала!</p>
                <div className='main_button-container'>
                    <button className='main_button' onClick={openModalCheckout}>
                        Отправить заявку
                    </button>
                </div>
            </div>
            <div className='main_yeezy-container'>
                <img src={Yeezy} alt="Yeezy" className='main_yeezy-img'/>
            </div>
        </div>
    );
}

export default Main;