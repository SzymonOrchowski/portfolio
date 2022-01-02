import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({setCurrentPage}) => {
    return (
        <div onClick={(e)=>{
            e.preventDefault();
            setCurrentPage('WelcomePage')
        }}>
            <Link to='/'>
                SO
            </Link>
        </div>
    );
};

export default Logo;