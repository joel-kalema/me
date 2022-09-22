import React from 'react';
import './style.css';

const Home =() => {
    return (
        <div className="home">
            <div className='home_containt'>
                <div className='home_title'>
                    <h2>Hi there</h2>
                    <h1>I AM JOEL KALEMA</h1>
                    <h3>Full-stack web developper</h3>
                    <button type='button'>Hire me</button>
                </div>
                <div className='home_img'>
                    <img src="home.jpg" alt='' />
                </div>
            </div>
        </div>
    );
}

export default Home;