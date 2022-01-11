import React from 'react';
import VideoCard from '../VideoCard';
import videosData from '../../data/musicFilmScoring.json'

const FilmScoring = () => {
    return (
        <div id='film-scoring'>
            <header id='film-scoring-text-header'>
                <h1>
                    Film Scoring
                </h1>
            </header>
            <main>
                <p>
                    My approach to writing music that serves the video.
                </p>
            </main>
            <div id="filmscoring-videos-container">
                {videosData.videos.map((video) => {
                    return <VideoCard className='filmscoring-videos' key={video.id} data={video}/>
                })}
            </div>
        </div>
    );
};

export default FilmScoring;