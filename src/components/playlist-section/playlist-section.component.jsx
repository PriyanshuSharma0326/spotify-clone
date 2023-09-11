import React from 'react';
import './playlist-section.style.scss';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import PlaylistCard from '../playlist-card/playlist-card.component';

function PlaylistSection() {
    return (
        <div className='playlist-section'>
            <div className="section-links">
                <Link to='/section' className='section-title'>
                    Spotify Playlists
                </Link>

                <Button 
                    buttonText='Show all' 
                    buttonType='noPaddingSmall' 
                    type='button' 
                />
            </div>

            <div className="playlists-container">
                <PlaylistCard 
                    playlistImageURL='https://i1.sndcdn.com/artworks-oPc3RHNk8inE57kd-RmdGSg-t500x500.jpg' 
                    title="Today's Top Hits" 
                    desc='Kick back to the best new and recent chill hits.' 
                />

                <PlaylistCard 
                    playlistImageURL='https://i1.sndcdn.com/artworks-oPc3RHNk8inE57kd-RmdGSg-t500x500.jpg' 
                    title='Colores' 
                    desc='Studio album by J Balvin' 
                />

                <PlaylistCard 
                    playlistImageURL='https://i1.sndcdn.com/artworks-oPc3RHNk8inE57kd-RmdGSg-t500x500.jpg' 
                    title='Colores' 
                    desc='Studio album by J Balvin' 
                />

                <PlaylistCard 
                    playlistImageURL='https://i1.sndcdn.com/artworks-oPc3RHNk8inE57kd-RmdGSg-t500x500.jpg' 
                    title='Colores' 
                    desc='Studio album by J Balvin' 
                />

                <PlaylistCard 
                    playlistImageURL='https://i1.sndcdn.com/artworks-oPc3RHNk8inE57kd-RmdGSg-t500x500.jpg' 
                    title='Colores' 
                    desc='Studio album by J Balvin' 
                />
            </div>
        </div>
    )
}

export default PlaylistSection;
