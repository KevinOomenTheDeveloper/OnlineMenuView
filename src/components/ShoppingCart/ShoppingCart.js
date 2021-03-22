import React from 'react';
import "./ShoppingCart.sass"
import {Link} from "react-router-dom";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import { useState} from "react";

const ShoppingCart = () => {

    const [products, setItems] = useState([
        {
            id: 1,
            name: 'Tomato Soup',
            price: "4.00",
            description: "This is soup made with tomatoes"
        },
        {
            id: 2,
            name: "Salad",
            price: "3.00",
            description: "Salad with dressing"
        },
        {
            id: 3,
            name: "Steak",
            price: "6.00",
            description: "Lorem Ipsum"
        },
        {
            id: 4,
            name: "Salad",
            price: "3.00",
            description: "Salad with dressing"
        }
    ])

    return (
        <div className="wrapper">

            <Link to="/">
                Back to hello world
            </Link>
            <Container>
                {products.map((product) => (
                    <div>
                        <hr/>
                        <Row>
                            <Col>
                                <h4>{product.name}</h4>
                            </Col>
                            <Col className="price">
                                <h4>{product.price}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>{product.description}</h5>
                            </Col>
                        </Row>
                    </div>
                ))}
                <div>
                    <hr/>
                    <Row>
                        <Col>
                            <h4>SubTotal</h4>
                        </Col>
                        <Col className="price">
                            <h4>{getPriceSum(products).toFixed(2)}</h4>
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
                            <h4>0.00</h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ShoppingCart;

function getPriceSum(products){
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += parseFloat(products[i].price);
    }
    return total
}