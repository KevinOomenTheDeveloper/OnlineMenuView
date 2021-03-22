import React from 'react';
import "./Layout.sass"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
};

export default Layout;