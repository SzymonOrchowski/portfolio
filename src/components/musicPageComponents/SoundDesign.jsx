import React from 'react';
import VideoCard from '../VideoCard';
import videosData from '../../data/musicSoundDesign.json'

const SoundDesign = () => {
    return (
        <div id='sound-design'>
            <header id='sound-design-text-header'>
                <h1>
                    Sound Design
                </h1>
            </header>
            <main>
                <p>
                    Not only music is my passion. Creating imaginary worlds from the sound perspective is my another huge adventure.
                </p>
            </main>
            <div id="sounddesign-videos-container">
                {videosData.videos.map((video) => {
                    return <VideoCard className='sounddesign-videos' key={video.id} data={video}/>
                })}
            </div>
        </div>
    );
};

export default SoundDesign;