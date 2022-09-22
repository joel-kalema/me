import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

const Experience =() => {
    const percentage = 66;
    return (
        <div className="experience">
            <div className='experience_content'>
                <div className='experience_year' >
                    <h1>3 <span>.</span></h1>
                    <div>
                        <h3>Year</h3>
                        <h3>Experience</h3>
                        <h3>Working</h3>
                    </div>
                </div>
                <div>
                    <h1>Better experiences</h1>
                    <p>I have serious passion for UI effects, animations
                       and creating intuitive, dynamic user experiences.</p>
                    <div>
                        <div className='circle_bar'>
                            <h5>WEB DESIGN</h5>
                            <CircularProgressbar
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "rgb(9, 255, 0)",
                            })}
                            />
                        </div>
                        <div className='circle_bar'>
                            <h5>ELECTRONIC</h5>
                            <CircularProgressbar
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "rgb(9, 255, 0)",
                            })}
                            />
                        </div>
                        <div className='circle_bar'>
                            <h5>PROBLEM SOLVING</h5>
                            <CircularProgressbar
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "rgb(9, 255, 0)",
                            })}
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Experience;