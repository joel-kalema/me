import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import './style.css';

const About =() => {
    return (
        <div className="about">
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
                        <h4><span><AiFillSafetyCertificate /></span> Html</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Css</h4>
                        <h4><span><AiFillSafetyCertificate /></span> JavaScript</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Ruby</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Firebase</h4>
                    </div>
                    <div>
                        <h4><span><AiFillSafetyCertificate /></span> React</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Redux</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Bootstrap</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Scss</h4>
                        <h4><span><AiFillSafetyCertificate /></span> Jest</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;