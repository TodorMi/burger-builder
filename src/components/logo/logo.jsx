import React from 'react';
import burgerLogo from '../../assets/burger-logo.png'
import './logo.css'
const Logo = (props) =>(
    <div className='logo'>
        <img  src={burgerLogo} alt="burgerLogo"/>
    </div>
)

export default Logo;