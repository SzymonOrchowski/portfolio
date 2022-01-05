import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({setCurrentPage, fullScreenMenuIsVisible, setFullScreenMenuIsVisible}) => {
    console.log(fullScreenMenuIsVisible)
    return (
        <div onClick={(e)=>{
            e.preventDefault();
            setCurrentPage('WelcomePage')
            if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
        }}>
            <Link style={{textDecoration: 'none'}} to='/' >
                <div id='logo-container'>
                    <div id='logo-box'>
                        <div id='logo-s'>S</div>
                        <div id='logo-o'>O</div>
                    </div>
                    <div id='logo-home-page'>Home Page</div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;