import React, { useState } from 'react';
import musicAudioData from '../../data/musicAudioData.json'
import playbutton from '../../img/icons/audioplayer/iconmonstr-media-control-4-240.png'
import pausebutton from '../../img/icons/audioplayer/iconmonstr-media-control-8-240.png'
import prevbutton from '../../img/icons/audioplayer/iconmonstr-media-control-33-240.png'
import nextbutton from '../../img/icons/audioplayer/iconmonstr-media-control-29-240.png'
import volumebutton from '../../img/icons/audioplayer/iconmonstr-audio-5-240.png'
import mutebutton from '../../img/icons/audioplayer/iconmonstr-audio-9-240.png'

const MyMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(musicAudioData.tracks[0])
    const [isMuted, setIsMuted] = useState(false)
    
    return (
        <div id='my-music'>
            <div>
                <header id='my-music-text-header'>
                    <h1>
                        My Original Music
                    </h1>
                    <p>
                        A few examples of my work as an independent composer.   
                    </p>
                </header>
                <div className='audio-player-full'>
                    <div className='audio-player-top-bar'>
                        <div onClick={() => {isPlaying ? setIsPlaying(false) : setIsPlaying(true)}}>
                            {isPlaying ? <img src={pausebutton} width='90'/> : <img src={playbutton} width='90'/>}
                        </div>
                        <div className='audio-player-currentsonginfo'>
                            <div><b>{currentSong.artist}</b></div>
                            <div>{currentSong.title}</div>  
                        </div>
                    </div>
                    <div className='audio-player-track-nav-bar'>
                        <div className='audio-player-track-nav-button-container'>
                            <div className='audio-player-navbutton' onClick={()=>{
                                currentSong.number === 1 ? setCurrentSong(musicAudioData.tracks[musicAudioData.tracks.length - 1]) : setCurrentSong(musicAudioData.tracks[currentSong.number - 2])
                                }}>
                                    <img src={prevbutton} width='28' />
                                </div>
                            <div className='audio-player-navbutton' onClick={()=>{
                                currentSong.number === musicAudioData.tracks.length ? setCurrentSong(musicAudioData.tracks[0]) : setCurrentSong(musicAudioData.tracks[currentSong.number])
                                }}>
                                    <img src={nextbutton} width='28'/>
                                </div>
                        </div>
                        <div className='audio-player-progressbar-container'>
                            <div></div>
                            <div></div>
                            <input type='range' step='0.01' className='audio-player-progressbar'></input>
                        </div>
                        <div className='audio-player-time'>3:33 / 3:33</div>
                        <div className='audio-player-volume' onClick={() => {isMuted ? setIsMuted(false) : setIsMuted(true)}}>
                            {isMuted ? <img src={volumebutton} width='24'/> : <img src={mutebutton} width='24'/>}
                        </div>
                    </div>
                    <div className='audio-player-track-list'>
                        {musicAudioData.tracks.map((track) => {
                            return <div className='audio-player-track' onClick={()=>{setCurrentSong(musicAudioData.tracks[track.number - 1])}}>
                                        <div>
                                            <div>{track.number}. {track.artist} - {track.title}</div>
                                        </div>
                                        <div>{track.duration}</div>
                                    </div> 
                        })}
                    </div>
                    <div className='audio-player-audio-visualiser'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyMusic;