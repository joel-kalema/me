import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import './style.css';

const About =() => {
    const languages = ['Html', 'Css', 'JavaScript', 'Ruby', 'Firebase'];
    const technologies = ['React', 'Redux', 'Bootstrap', 'Scss', 'Jest'];
    return (
        <div className="about">
            <div className='about_informations'>
                <div className='about_content'>
                    <h1>About me</h1>
                    <h3>Hi, Here I am</h3>
                    <h3>To help your next project</h3>
                    <p>I'm Joel KALEMA a software developer specialized
                        in different technologies ,Building web applications, 
                        Mobile apps and beautiful websites for companies. 
                        Love digging into hard problems, learning new languages 
                        and technologies.
                    </p>
                </div>
                <div className='about_langes'>
                    <h3>LANGUAGES AND FRAMEWORKS</h3>
                    <div className='about_langes_tech'>
                        <div>
                            {languages.map((lang) => (
                                <h4><span><AiFillSafetyCertificate /></span> {lang}</h4>
                            ))}
                        </div>
                        <div>
                            {technologies.map((tech) => (
                                <h4><span><AiFillSafetyCertificate /></span> {tech}</h4>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='download_cv'>
                    <a href='portfolio'>My portfolio</a>
                    <a href="CV_JOEL KALEMA.pdf" download="CV_JOEL KALEMA.pdf" className='download'>Download CV <BiDownload /></a>
                </div>
            </div>
            <div className='about_picture'>
                <div className='line_1'></div>
                <div className='line_2'></div>
                <img src='joel.png' alt='' />
                <div className='line_3'></div>
                <div className='line_4'></div>
            </div>
        </div>
    );
}

export default About;