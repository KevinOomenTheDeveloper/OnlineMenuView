import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ShoppingCartItem.sass'

const ShoppingCartItem = ({ product }) => {
    return (
        <div>
            <hr className="shoppingcartitem-hr"/>
            <Row>
                <Col>
                    <h4>{product.name}</h4>
                </Col>
                <Col className="price">
                    <h4>{product.price * product.amount}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>{product.description}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>{product.amount}x</h5>
                </Col>
            </Row>
        </div>

    );
};

export default ShoppingCartItem;