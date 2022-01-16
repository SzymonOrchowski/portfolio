import React from 'react';

const VideoCard = ({data, className}) => {

    return (
        <div className={className}>
            <div className='video-card'>
                    <iframe className='video-card-player' src={data.link + '?rel=0&modestbranding=1'} allow="fullscreen"></iframe>
                {data.hasDescription
                    ?
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
                    : 
                        null
                }
            </div>
        </div>
    );
};

export default VideoCard;