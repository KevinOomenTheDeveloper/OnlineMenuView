import React from 'react';
import "./ShoppingCart.sass"
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";

const ShoppingCart = ({products}) => {

    return (
        <div className="wrapper">
            <Container>
                {products.map((product) => (
                    <ShoppingCartItem product={product}/>
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