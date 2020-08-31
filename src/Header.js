import React from 'react'
import image from './image/facebook.jpg'

function Header() {
    return (
        <div className="header">
        <div className="header__left">
        <img style={{height: 40}} src={image} alt="facebook logo"/>
        </div>
            <div className="header__middle">
            </div>
            <div className="header__right">
            </div>
        </div>
    )
}

export default Header
