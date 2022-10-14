import React from 'react';
import './style.css';
import { HiOutlineLocationMarker, HiMailOpen } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa'

const Contact =() => {
    return (
        <div className='contacts'>
            <div className='info'>
                <div className='contact_info'>
                    <h1>Contact me</h1>
                    <h3>Let's do it together</h3>
                    <p>Question, comment or concern? this contact form is the best way to get in touch with me.</p>
                </div>
                <div className='contact_info'>
                    <p><span><HiOutlineLocationMarker /></span> Kigali</p>
                    <p><span><HiMailOpen /></span> joelkalema63@gmail.com</p>
                    <p><span><BsFillTelephoneFill /></span> +250 (0) 789816723</p>
                </div>
            </div>

            <div className='form'>
                <h2>Message me</h2>
                <form>
                    <input type="text" name="userName" id="name" placeholder="Name" maxlength="30" required /><br />
                    <input type="email" name="email" id="email" placeholder="Email" required /><br />
                    <textarea maxlength="500" placeholder="Message" rows="10" cols="100"></textarea><br />
                    <button type="submit">send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;