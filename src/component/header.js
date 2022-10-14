import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa'
import '../App.css';

const Header =() => {
    return (
        <div className="header">
            <div className='header_icons'>
                <a href='#'><AiOutlineGithub /></a>
                <a href='#'><ImLinkedin2 /></a>
                <a href='#'><BsTwitter /></a>
                <a href='#'><FaAngellist /></a>
            </div>
        </div>
    );
}

export default Header;