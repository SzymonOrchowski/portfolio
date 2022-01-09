import React, { useEffect } from 'react';
import MusicAboutMe from './musicPageComponents/MusicAboutMe';
import MyWorks from './musicPageComponents/MyWorks';
import MyMusic from './musicPageComponents/MyMusic';
import MyDiscography from './musicPageComponents/MyDiscography';
import MusicForMarketing from './musicPageComponents/MusicForMarketing';
import FilmScoring from './musicPageComponents/FilmScoring';
import SoundDesign from './musicPageComponents/SoundDesign';
import MusicContact from './musicPageComponents/MusicContact';

const MusicPage = ({setCurrentPage, refs}) => {

    useEffect(()=>{
        setCurrentPage('MusicPage')
    },[])

    return (
        <div id='music-all-container'>
            <div ref={refs.musicAboutMe}>
                <MusicAboutMe />
            </div>
            <div ref={refs.myWorks}>
                <MyWorks />
            </div>
            <div ref={refs.myMusic}> 
                <MyMusic />
            </div>
            <div ref={refs.myDiscography}> 
                <MyDiscography />
            </div>
            <div ref={refs.musicForMarketing}>
                <MusicForMarketing />
            </div>
            <div ref={refs.filmScoring}>
                <FilmScoring />
            </div>
            <div ref={refs.soundDesign}>
                <SoundDesign />
            </div>
            <div ref={refs.musicContact}>              
                <MusicContact />
            </div>
        </div>
    );
};

export default MusicPage;