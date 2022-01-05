import React from 'react';

const VideoCard = ({data}) => {
    return (
        <div className='video-card'>
            <div>
                <iframe className='video-card-player' src={data.link + '?rel=0&modestbranding=1'} allow="fullscreen"></iframe>
            </div>
            <div className='video-card-description'>
                <div>
                {data.description.artist}
                </div>
                <div>
                {data.description.title}
                </div>
                <div>
                released by {data.description.releasedBy} in {data.description.releasedInYear}
                </div>
                <div>
                {data.description.myRole}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;