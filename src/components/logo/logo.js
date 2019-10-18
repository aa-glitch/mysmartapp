import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                <span role="img" aria-label='emoji'><img style={{paddingTop: '6px'}}alt='logo' src={brain} /></span>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;