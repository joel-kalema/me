import React from 'react';
import './style.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';

const Portfolio =() => {
    return (
        <div className="portfolio">
            <div className='portfolio_containt'>
                <h1>Portfolio</h1>
                <h3>Some of my best works</h3>
                <div className='projects'>
                    <div className='project'>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                        <div className='project_container'>
                            <h5>title</h5>
                            <p> Today we will be building a filtering system that will let us sort demo. We will ...</p>
                            <div className='project_links'>
                                <a href='#'>Live Demo <span><GoLinkExternal /></span></a>
                                <a href='#'>Source code <span><AiOutlineGithub /></span></a>
                            </div>
                            <div className='technologies'>
                                <h4>Html</h4>
                                <h4>Css</h4>
                            </div>
                            <div className='img'>img</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;