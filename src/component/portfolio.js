import React from 'react';
import './style.css';
import { project, topProject } from './projects';
import { AiOutlineGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';

const Portfolio =() => {
    return (
        <div className="portfolio" id='portfolio'>
            <div className='portfolio_containt'>
                <h1>Portfolio</h1>
                <h3>Some of my best works</h3>
                <div className='projects'>
                    <div className='project'>
                        {topProject.map((proj) => (
                            <div className='project_container'>
                                <h5>{proj.title}</h5>
                                <p>{proj.description}</p>
                                <div className='project_links'>
                                    <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                    <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                                </div>
                                <div className='technologies'>
                                   {proj.technologies.map((tech) => (<h4>{tech}</h4>))} 
                                </div>
                                <div className='img'>img</div>
                            </div>
                        ))}
                    </div>
                    <div className='project'>
                        {project.map((proj) => (
                            <div className='project_container'>
                                <h5>{proj.title}</h5>
                                <p>{proj.description}</p>
                                <div className='project_links'>
                                    <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                    <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                                </div>
                                <div className='technologies'>
                                   {proj.technologies.map((tech) => (<h4>{tech}</h4>))} 
                                </div>
                                <div className='img'>img</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;