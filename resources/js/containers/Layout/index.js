import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
           <Header />
            <main className="main-wrapper">
                <div className="container-fluid px-0">{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
