import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

const Experience =() => {
    const designPercentage = 85;
    const electronicPercentage = 75;
    const solvingPercentage = 70;

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
                        <div className='circle_containt'>
                            <CircularProgressbar
                                className='circle_bar'
                                value={designPercentage}
                                circleRatio={0.75}
                                text={`${designPercentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "#f54c49",
                            })}
                            />
                            <h5>WEB DESIGN</h5>
                        </div>
                        <div className='circle_containt'>
                            <CircularProgressbar
                                className='circle_bar'
                                value={electronicPercentage}
                                circleRatio={0.75}
                                text={`${electronicPercentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "#f54c49",
                            })}
                            />
                            <h5>ELECTRONIC</h5>
                        </div>
                        <div className='circle_containt'>
                            <CircularProgressbar
                                className='circle_bar'
                                value={solvingPercentage}
                                circleRatio={0.75}
                                text={`${solvingPercentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "#f54c49",
                            })}
                            />
                            <h5>PROBLEM SOLVING</h5>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Experience;