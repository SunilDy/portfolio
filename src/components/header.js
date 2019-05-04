import React from 'react';

import {HeaderDiv, StyledLink} from '../styles/HeaderStyle'

const Header = () => {
    return (
        <HeaderDiv>
            <StyledLink to="/"><h1>@Sunil</h1></StyledLink>
            <div id="links">
                <StyledLink to="/blog">Blog</StyledLink>
                <StyledLink to="/projects">Projects</StyledLink>
            </div>
        </HeaderDiv>
    )
}

export default Header;