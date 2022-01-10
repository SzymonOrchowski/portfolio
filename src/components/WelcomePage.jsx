import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useWindowDimensions} from '../utils/utils';

const WelcomePage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('WelcomePage')
    },[])

    return (
        <div id='WelcomePageContainer'>
            <div id='WelcomeBox'>
                <div id='welcomeBoxHeaderBox'>
                    <header>
                        Hi, {useWindowDimensions().width >= 600 ? <br/> : null}
                        I'm {useWindowDimensions().width < 600 ? <br/> : null}
                        <span><span id='welcomeBoxHeaderBoxLetterS'>S</span>zymon <span id='welcomeBoxHeaderBoxLetterO'>O</span>rchowski,</span><br/>
                        junior developer and music producer<br/>
                    </header>
                </div>
                <div id='welcomeBoxPortfolioButtonsBox'>
                    <Link to='/webdev' style={{textDecoration: 'none'}}>
                        <div className='PortfolioButton' id='PortfolioButton1'>
                        My Dev Portfolio
                        </div>
                    </Link>
                    <Link to='/music' style={{textDecoration: 'none'}}>
                        <div className='PortfolioButton' id='PortfolioButton2'>
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