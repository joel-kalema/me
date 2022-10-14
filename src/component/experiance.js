import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

const Experience =() => {
    const pourcentage = [
        {
            fonction: 'WEB DESIGN',
            percentage: 85
        },
        {
            fonction: 'ELECTRONIC',
            percentage: 75
        },
        {
            fonction: 'PROBLEM SOLVING',
            percentage: 70
        }
    ]

    return (
        <div className="experience">
            <div className='experience_content'>
                <div className='experience_year' >
                    <h1>3 <span>.</span></h1>
                    <div className='experience_details'>
                        <div className='line'></div>
                        <div>
                            <h3>Year</h3>
                            <h3>Experience</h3>
                            <h3>Working</h3>
                        </div>
                    </div>
                </div>
                <div className='experience_value'>
                    <h1>Better experiences</h1>
                    <p>I have serious passion for UI effects, animations
                       and creating intuitive, dynamic user experiences.</p>
                    <div>
                        {pourcentage.map((tech) => (
                            <div className='circle_containt'>
                            <CircularProgressbar
                                className='circle_bar'
                                value={tech.percentage}
                                circleRatio={0.75}
                                text={`${tech.percentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "#f54c49",
                            })}
                            />
                            <h5>{tech.fonction}</h5>
                        </div>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Experience;