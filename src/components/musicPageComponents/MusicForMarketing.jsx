import React from 'react';
import VideoCard from '../VideoCard';
import videosData from '../../data/musicForMarketing.json'

const MusicForMarketing = () => {
    return (
        <div id='music-for-marketing'>
            <header id='music-for-marketing-text-header'>
                <h1>
                    Advertising Music
                </h1>
            </header>
            <main>
                <p>
                    Examples of my work as a composer of commercial music and sound designer.
                </p>
            </main>
            <div id="music-for-marketing-videos-container">
                {videosData.ads.map((video) => {
                    return <VideoCard className='marketing-videos' key={video.id} data={video}/>
                })}
            </div>
        </div>
    );
};

export default MusicForMarketing;