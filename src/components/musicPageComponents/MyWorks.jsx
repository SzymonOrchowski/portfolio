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
                        My works
                    </h1>
                </header>
                <div>
                    <div id='my-works-videocards-container'>
                        {videosData.videos.map((video, index) => {
                            if (index >= (pageNumber - 1) * 6 && index < pageNumber * 6) {
                                return <VideoCard className='myworks-videos' key={video.id} data={video}/>
                            }
                        })}
                    </div>
                </div>
                <div id='pagination-box'>
                        {pageNumber === 1 ? 
                            <button className='pagination-button-prev-disabled' disabled>
                                prev
                            </button>
                        :
                            <button className='pagination-button-prev' onClick={(e)=>{
                                e.preventDefault();
                                setPageNumber(pageNumber - 1)
                            }}>
                                prev
                            </button>
                        }
                        {pagesArray.map((page)=>{
                            return <button key={page} className={page === pageNumber ? 'pagination-button-active' : 'pagination-button-inactive'}
                                onClick={(e)=>{
                                e.preventDefault();
                                setPageNumber(page)
                            }}>
                                {page}
                            </button>
                        })}
                        {pageNumber === pagesArray.length ? 
                            <button className='pagination-button-next-disabled' disabled>
                                next
                            </button>
                        :
                            <button className='pagination-button-next' onClick={(e)=>{
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