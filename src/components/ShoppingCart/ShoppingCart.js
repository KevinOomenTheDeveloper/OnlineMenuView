import React, {useState} from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ShoppingCart = ({products, tipTotal, setTipTotal}) => {

    const saveOrder = () => {


        async function onUseEffect() {

            const headers = {
                'Content-Type': 'text/plain'
            };

            await axios.post(
                'http://localhost:9191/orders/create',
                {headers}
            ).then(response => {
                console.log("Success ========>", response);
            })
        }
        onUseEffect().then()
    }

    return (
        <div className="shoppingcart-wrapper">
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
                            <h4>{getPriceSubSum(products).toFixed(2)}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tips setTipTotal={setTipTotal}></Tips>
                        </Col>
                        <Col className="price">
                            <h4>{tipTotal}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Total</h4>
                        </Col>
                        <Col className="price">
                            <h4>{getPriceSum(products, tipTotal).toFixed(2)}</h4>
                        </Col>
                    </Row>
                    <Button className="orderButton" onClick={saveOrder}>
                        Order!
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default ShoppingCart;

function getPriceSum(products, tipTotal) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += parseFloat(products[i].price);
    }
    return total + Number(tipTotal);
}

function getPriceSubSum(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += parseFloat(products[i].price);
    }
    return total;
}