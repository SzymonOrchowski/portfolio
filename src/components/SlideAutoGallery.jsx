import React, { useState, useEffect } from 'react';

const SlideAutoGallery = ({data}) => {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        setTimeout(
            ()=> {setIndex((prevIndex) => prevIndex === data.length - 1 ? 0 : prevIndex + 1)},
            4000)
    },[index, data.length])

    const overPhotoPath = data[index].name

    return (
        <div>
            <div id='photo-div'>
                <img id='photo' src={process.env.PUBLIC_URL + overPhotoPath} alt='me'></img>
            </div>
        </div>
    );
};

export default SlideAutoGallery;