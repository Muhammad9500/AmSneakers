import React from 'react'
import "./Screen.css"
import AdidasIcon from "./img/adidasIcon.png"
import AdidasTitle from "./img/adidasTitle.png"

const screen = ({children}) => {
    return (
    <div className='screen-img'>
        <div className='screen-coating'>
            {children}
            <div className='adidasIconAndTitle_container'> 
                <img src={AdidasTitle} className="adidas-title"/>
                <img src={AdidasIcon} className="adidas-icon"/>
            </div>
        </div>
    </div>
    );
}

export default screen;