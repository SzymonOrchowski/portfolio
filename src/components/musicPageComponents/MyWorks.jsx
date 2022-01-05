import React from 'react';
import VideoCard from '../VideoCard';
import videosData from '../../data/myWorkVideos.json'

const MyWorks = () => {
    return (
        <div id='my-works'>
            <div>
                <header id='my-works-text-header'>
                    <h1>
                        MyWorks
                    </h1>
                </header>
                <main>
                    <div id='my-works-videocards-container'>
                        <VideoCard data={videosData.videos[0]}/>
                        <VideoCard data={videosData.videos[1]}/>
                        <VideoCard data={videosData.videos[2]}/>
                        <VideoCard data={videosData.videos[3]}/>
                        <VideoCard data={videosData.videos[4]}/>
                        <VideoCard data={videosData.videos[5]}/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MyWorks;