import React from 'react';
import albumsData from '../../data/musicDiscographyData.json'
import spotifyIcon from '../../img/icons/iconmonstr-spotify-1-240.png'

const MyDiscography = () => {

    albumsData.albums.sort((album1, album2) => {return album2.releasedYear - album1.releasedYear})

    return (
        <div id='my-discography'>
            <header id='my-discography-text-header'>
                <h1>
                    My Discography
                </h1>
            </header>
            <div id='my-discography-album-cards-container'>
                {albumsData.albums.map((album)=>{
                    return <div key={album.id} className='my-discography-album-card'>
                        <div className='my-discography-album-card-inner'>
                            <div className='my-discography-album-card-front'>
                                <img src={process.env.PUBLIC_URL + '/img/cd-covers/'+ album.albumCoverPath} width='300' alt={album.artist + ' ' + album.title + ' cover.'}/>
                            </div>
                            <div className='my-discography-album-card-back'>
                                <div className='my-discography-album-card-artist'>{album.artist}</div>
                                <div className='my-discography-album-card-title'>{album.title}</div>
                                <div className='my-discography-album-card-released'>Released:</div>
                                <div className='my-discography-album-card-released2'>{album.releasedBy} {album.releasedYear}</div>
                                <div className='my-discography-album-card-myRole'>{album.myRole}</div>
                                <div className='my-discography-album-card-listen-container'>
                                    <div className='my-discography-album-card-listen'>Listen on Spotify:</div>
                                    <div className='my-discography-album-card-spotify' onClick={()=>{window.open(album.spotifyLink)}} ><img src={spotifyIcon} width='60' alt='Play on Spotify'/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default MyDiscography;