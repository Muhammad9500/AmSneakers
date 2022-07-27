import React from 'react'
import "./Footer.css"
import { ReactComponent as Phone } from "./svg/phoneIcon.svg";
import { ReactComponent as Instagram } from "./svg/instagramIcon.svg";
import { ReactComponent as Telegram } from "./svg/telegramIcon.svg";
const footer = () => {
    return (
        <div className='footer_container'>
            <a href="tel:+79999909500" className='footer_socialLinks'><Phone/></a>
            <a href="https://www.instagram.com" className='footer_socialLinks'><Instagram/></a>
            <a href="https://t.me/+79999909500" className='footer_socialLinks'><Telegram/></a>
        </div>
    );
}

export default footer;