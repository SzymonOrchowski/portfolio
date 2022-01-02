import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <header>
                Hi, I'm Szymon Orchowski,
                junior web developer and music producer
            </header>
            <Link to='/webdev'>
                <div>
                My WebDev Portfolio
                </div>
            </Link>
            <Link to='/music'>
                <div>
                My Music Portfolio
                </div>
            </Link>
            <Link to='/contact'>
                <div>
                Contact me!
                </div>
            </Link>
        </div>
    );
};

export default WelcomePage;