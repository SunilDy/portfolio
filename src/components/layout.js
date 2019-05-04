import React from 'react';
import '../styles/index.css';

// Compomnent
    import Header from './header';
    import Footer from './footer';
    import {Container} from '../styles/LayoutStyle'

const Layout = ({children}) => {
    return (
        <Container>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Container>
    )
}

export default Layout;