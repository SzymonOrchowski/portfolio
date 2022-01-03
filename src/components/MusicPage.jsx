import React, { useEffect } from 'react';
import MusicAboutMe from './musicPageComponents/MusicAboutMe';
import MyWorks from './musicPageComponents/MyWorks';
import MyMusic from './musicPageComponents/MyMusic';
import MyDiscography from './musicPageComponents/MyDiscography';
import MusicForMarketing from './musicPageComponents/MusicForMarketing';
import FilmScoring from './musicPageComponents/FilmScoring';
import SoundDesign from './musicPageComponents/SoundDesign';
import MusicContact from './musicPageComponents/MusicContact';

const MusicPage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('MusicPage')
    },[])

    return (
        <div>
            <MusicAboutMe />
            <MyWorks />
            <MyMusic />
            <MyDiscography />
            <MusicForMarketing />
            <FilmScoring />
            <SoundDesign />
            <MusicContact />
        </div>
    );
};

export default MusicPage;