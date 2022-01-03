import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomePage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('WelcomePage')
    },[])

    return (
        <div id='WelcomePageContainer'>
            <div id='WelcomeBox'>
                <div id='welcomeBoxHeaderBox'>
                    <header>
                        Hi, <br/>
                        I'm <span><span id='welcomeBoxHeaderBoxLetterS'>S</span>zymon <span id='welcomeBoxHeaderBoxLetterO'>O</span>rchowski,</span><br/>
                        junior developer and music producer<br/>
                    </header>
                </div>
                <div id='welcomeBoxPortfolioButtonsBox'>
                    <Link to='/webdev' style={{textDecoration: 'none'}}>
                        <div class='PortfolioButton' id='PortfolioButton1'>
                        My Dev Portfolio
                        </div>
                    </Link>
                    <Link to='/music' style={{textDecoration: 'none'}}>
                        <div class='PortfolioButton' id='PortfolioButton2'>
                        My Music Portfolio
                        </div>
                    </Link>
                </div>
                <div id='welcomeBoxContactButtonBox'>
                    <Link to='/contact' style={{textDecoration: 'none'}}>
                        <div id='ContactMeButton'>
                        Contact me!
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;