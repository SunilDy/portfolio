import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
    return  (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sunil Kumar - Blog</title>
            </Helmet>
            <h1>Blog page</h1>
        </Layout>
    )
}
export default BlogPage;