import React from 'react';
import "./ShoppingCart.sass"
import {Link} from "react-router-dom";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
//import "bootstrap";

const ShoppingCart = () => {
    return (
        <div className="wrapper">
            <Container>
                <div>
                    <hr></hr>
                    <Row>
                        <Col>
                            <h4>TomatenSoep</h4>
                        </Col>
                        <Col className="price">
                            <h4>4.00</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Dit is soep met tomaten erin.</h5>
                        </Col>
                    </Row>
                </div>
                <div>
                    <hr></hr>
                    <Row>
                        <Col>
                            <h4>Salade</h4>
                        </Col>
                        <Col className="price">
                            <h4>3.00</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Salade met sla.</h5>
                        </Col>
                    </Row>
                </div>
                <div>
                    <hr></hr>
                    <Row>
                        <Col>
                            <h4>SubTotal</h4>
                        </Col>
                        <Col className="price">
                            <h4>7.00</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Tip</h4>
                        </Col>
                        <Col className="price">
                            <h4>0.00</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Total</h4>
                        </Col>
                        <Col className="price">
                            <h4>7.00</h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ShoppingCart;