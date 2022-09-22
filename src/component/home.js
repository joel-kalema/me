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
                    <p>I can help you build a product, feature or website
                       Look through some of my work and experience! If you 
                       like what you see and have a project you need coded, 
                       don’t hestiate to contact me.</p>
                    <button type='button'>Hire me</button>
                </div>
                <div className='home_img'>
                    <div className='img'>
                        <img src="home.jpg" alt='' />
                    </div>
                    <div className='cercle_1'>
                        <div className='cercle_2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;