import React from 'react';
import "./Home.sass"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="wrapper">
            <p>
                Hallo
            </p>
            <Link to="/">
                Back to hello world
            </Link>

        </div>


    );
};

export default Home;