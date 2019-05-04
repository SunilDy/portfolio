import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sunil Kumar - Projects</title>
            </Helmet>
            <h1>Projects Page</h1>
        </Layout>
    )
}

export default ProjectsPage;