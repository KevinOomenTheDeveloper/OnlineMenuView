import React from 'react';
import "./Footer.sass"
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <Container>
                <div className="footer-container">
                    <span>
                        Footer
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;