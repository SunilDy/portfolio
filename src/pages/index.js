import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FaTwitter } from 'react-icons/fa';

import Layout from '../components/layout';
import profile from '../images/profile.jpg';
import { Container, Button } from '../styles/IndexStyle';

const TwitterBtn = styled(Button)`
    background: whitesmoke;
    color: dodgerblue;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sunil Kumar - Portfolio</title>
            </Helmet>
            <Container>
                <div id="pic">
                    <img src={profile} alt="Sunil Kumar"/>
                </div>
                <div id="content">
                    <h1>Hi there!</h1>
                    <p>
                        I'm Sunil from Odisha, India. I'm a Web Developer and currently doing
                        Computer Science. I'm available to hire at online platforms like freelancer
                        and Upwork. I specialize in trending web technologies like React, GraphQL
                        and Node.js etcetera where MongoDB and awesome designing skills are a bonus and
                        I always make sure that there is no bug left behind.
                    </p> 
                    <div id="buttons">
                        <a href="https://twitter.com/SunilDy9" target="_blank" rel="noopener noreferrer"><TwitterBtn className="btn"><FaTwitter /> Follow me!</TwitterBtn></a>
                        <Button className="btn" id="projects"><StyledLink to="/projects">View my Work</StyledLink></Button>
                    </div>
                </div>
            </Container>        
        </Layout>
    )
}

export default IndexPage;