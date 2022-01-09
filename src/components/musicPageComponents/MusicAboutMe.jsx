import React, { useState } from 'react';
import musicAboutMePhotoData from '../../data/musicAboutMePhotoData.json'
import SlideAutoGallery from '../SlideAutoGallery';
import useWindowDimensions from '../../utils/utils';
import MusicAboutMeBackgroundSVG from '../backgroundComponents/MusicAboutMeBackgroundSVG';

const MusicAboutMe = () => {
    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <div id='music-about-me'>
            {useWindowDimensions().width > 1200 ? <MusicAboutMeBackgroundSVG /> : null}
            <div id='music-about-me-container'>
                <div id='music-about-me-text'>
                    <header id='music-about-me-text-header'>
                        <h1>
                        Me in the music
                        </h1>
                    </header>
                    <div id='music-about-me-text-paragraphs'>
                        <p>
                        I am a music producer, sound engineer, and a composer, with over 20 years of experience working in the music industry. For me, music is people, their emotions, sensitivity, their stories, and dreams. Every day I deal with sound to help people express their messages. Sometimes I have to polish a mix or master of another great record. Sometimes I have to write music to subtly highlight another great poem. Sometimes I need to make a sound design for another interesting animation. Every day is a different adventure.
                        </p>
                        <p>
                        I like to listen to people and to what they have to say. Everyone is different, and every commission is different, so I am glad that I can help people in many different ways. Every time I try to use all of my skills and experience to develop products that can reach their audiences.
                        </p>
                        <p>
                        I am grateful for the trust and the opportunity to participate in so many wonderful and unique projects, and I am open to another adventure in the world of sounds.
                        </p>
                    </div>
                </div>
                <div id='music-about-me-photo-container'>
                    <SlideAutoGallery data={musicAboutMePhotoData.photos}/>
                </div>
            </div>
        </div>
    );
};

export default MusicAboutMe;