import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import videosData from '../../data/myWorkVideos.json'

const MyWorks = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const pagesArray = []
    for (let i = 1; i <= Math.ceil(videosData.videos.length / 6); i++) {
        pagesArray.push(i)
    }

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
                        {videosData.videos.map((video, index) => {
                            if (index >= (pageNumber - 1) * 6 && index < pageNumber * 6) {
                                return <VideoCard key={video.id} data={video}/>
                            }
                        })}
                    </div>
                </main>
                <div id='pagination-box'>
                        {pageNumber === 1 ? 
                            <button className='button-special' disabled>
                                prev
                            </button>
                        :
                            <button className='button-special' onClick={(e)=>{
                                e.preventDefault();
                                setPageNumber(pageNumber - 1)
                            }}>
                                prev
                            </button>
                        }
                        {pagesArray.map((pageNumber)=>{
                            return <button onClick={(e)=>{
                                e.preventDefault();
                                setPageNumber(pageNumber)
                            }}>
                                {pageNumber}
                            </button>
                        })}
                        {pageNumber === pagesArray.length ? 
                            <button className='button-special' disabled>
                                next
                            </button>
                        :
                            <button className='button-special' onClick={(e)=>{
                                e.preventDefault();
                                setPageNumber(pageNumber + 1)
                            }}>
                                next
                            </button>
                        }
                </div>
            </div>
        </div>
    );
};

export default MyWorks;