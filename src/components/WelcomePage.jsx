import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomePage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('WelcomePage')
    },[])

    return (
        <WelcomePageContainer id='WelcomePageContainer'>
            <div id='WelcomeBox'>
                <div id='welcomeBoxHeaderBox'>
                    <header>
                        Hi, <br/>
                        I'm Szymon Orchowski, <br/>
                        junior web developer and music producer<br/>
                    </header>
                </div>
                <div id='welcomeBoxPortfolioButtonsBox'>
                    <Link to='/webdev'>
                        <div id='PortfolioButton'>
                        My WebDev Portfolio
                        </div>
                    </Link>
                    <Link to='/music'>
                        <div id='PortfolioButton'>
                        My Music Portfolio
                        </div>
                    </Link>
                </div>
                <div id='welcomeBoxContactButtonBox'>
                    <Link to='/contact'>
                        <div id='ContactMeButton'>
                        Contact me!
                        </div>
                    </Link>
                </div>
            </div>
        </WelcomePageContainer>
    );
};

const WelcomePageContainer = styled.div`

`

export default WelcomePage;