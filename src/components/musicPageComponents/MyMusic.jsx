import React, { useState } from 'react';
import musicAudioData from '../../data/musicAudioData.json'
import { timeFormat } from '../../utils/utils';
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
    const [currentTime, setCurrentTime] = useState(0)
    const [audio, setAudio] = useState()
    const [audioDuration, setAudioDuration] = useState(0)
    const [audioVolume, setAudioVolume] = useState(1)

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
                <div>
                    <audio 
                        id="audio" 
                        src={process.env.PUBLIC_URL + '/audio/' + currentSong.filepath} 
                        onLoadedMetadata={(e) => {
                                        setAudio(e.target)
                                        setAudioDuration(e.target.duration)
                                        }}
                        onTimeUpdate={(e)=>{
                                    e.preventDefault()
                                    setCurrentTime(e.target.currentTime)
                                    }}
                    />
                </div>
                <div className='audio-player-full'>
                    <div className='audio-player-top-bar'>
                        <div 
                            onClick={() => {
                            isPlaying ? setIsPlaying(false) : setIsPlaying(true);
                            isPlaying ? audio.pause() : audio.play()
                            }}
                        >
                            {isPlaying ? <img src={pausebutton} width='90' alt='pause'/> : <img src={playbutton} width='90' alt='play'/>}
                        </div>
                        <div className='audio-player-currentsonginfo'>
                            <div>
                                <b>{currentSong.artist}</b>
                            </div>
                            <div>
                                {currentSong.title}
                            </div>  
                        </div>
                    </div>
                    <div className='audio-player-track-nav-bar'>
                        <div className='audio-player-track-nav-button-container'>
                            <div className='audio-player-navbutton' 
                                onClick={()=>{
                                        setCurrentTime(0)
                                        currentSong.number === 1 ? setCurrentSong(musicAudioData.tracks[musicAudioData.tracks.length - 1]) : setCurrentSong(musicAudioData.tracks[currentSong.number - 2])
                                        setIsPlaying(true);
                                        setTimeout(()=>{audio.play()}, 50)
                                }}
                            >
                                <img src={prevbutton} width='28' alt='prev'/>
                            </div>
                            <div className='audio-player-navbutton' 
                                onClick={()=>{
                                        setCurrentTime(0)
                                        currentSong.number === musicAudioData.tracks.length ? setCurrentSong(musicAudioData.tracks[0]) : setCurrentSong(musicAudioData.tracks[currentSong.number])
                                        setIsPlaying(true);
                                        setTimeout(()=>{audio.play()}, 50)
                                }}
                            >
                                    <img src={nextbutton} width='28' alt='next'/>
                            </div>
                        </div>
                        <div className='audio-player-progressbar-container'>
                            <input 
                                className='audio-player-progressbar'
                                type='range' 
                                step='0.01' 
                                value={currentTime}
                                max={audioDuration}
                                onChange={(e) => {
                                            e.preventDefault(); 
                                            audio.currentTime = e.target.value
                                        }}
                            />
                        </div>
                        <div className='audio-player-time'>
                            {timeFormat(currentTime)} / {currentSong.duration}
                        </div>
                        <div className='audio-player-volume'>
                            <div  
                                onClick={() => {
                                        isMuted ? setIsMuted(false) : setIsMuted(true)
                                        isMuted ? audio.volume = 1 : audio.volume = 0
                                }}
                            >
                                {isMuted ? <img src={mutebutton} width='24' alt='mute'/> : <img src={volumebutton} width='24' alt='volume'/>}
                            </div>
                        </div>
                    </div>
                    <div className='audio-player-track-list'>
                        {musicAudioData.tracks.map((track) => {
                            return <div key={track.number} className='audio-player-track' onClick={()=>{
                                        setCurrentTime(0)
                                        setCurrentSong(musicAudioData.tracks[track.number - 1]);
                                        setIsPlaying(true);
                                        setTimeout(()=>{audio.play()}, 50)
                                    }}>
                                        <div>
                                            <div>{track.number}. {track.artist} {track.title !== '' ? ' - ' : null} {track.title}</div>
                                        </div>
                                        <div>
                                            {track.duration}
                                        </div>
                                    </div> 
                        })}
                    </div>
                    {/* <div className='audio-player-audio-visualiser'>
                            <div id="content">
                                <canvas id="canvas"></canvas>
                            </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default MyMusic;