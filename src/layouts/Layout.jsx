import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import "styles/styles.css";


const Layout = ({children}) => {
    return (
        <div className = 'mainCointener'>
            <Header />
            <main>{children}</main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Layout
