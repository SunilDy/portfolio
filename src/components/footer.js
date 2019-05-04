import React from 'react';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

import { FooterStyle } from '../styles/FooterStyle';

const Footer = () => {
    return (
        <FooterStyle>
            <div id="social">
                <a href="https://twitter.com/SunilDy9" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://github.com/SunilDy/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://instagram.com/sunil_dy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <p>Made with <span role="img" description="aria-label">&#x1F499;</span> using Gatsby and hosted on Netlify!</p>
        </FooterStyle>
    )
}

export default Footer;