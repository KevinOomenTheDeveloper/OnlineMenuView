import React, { useState, useEffect } from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Button from "react-bootstrap/Button";
import Tips from "./Tips/Tips";
import axios from "axios";

const ShoppingCart = ({ products }) => {
  const initialState = {
    id: null,
    orderId: null,
    dateTime: "",
    tableId: null,
    tip: null,
    totalPrice: null,
  };
  const [tipTotal, setTipTotal] = useState(0);
  const [order, setOrder] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const saveOrder = () => {
    var data = {
      tip: order.tip,
      totalPrice: getPriceSum,
    };

    axios
      .post("http://localhost:9191/orders/create", data)
      .then((res) => {
        setOrder({
          tip: res.data.title,
          totalPrice: res.data.totalPrice,
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="shoppingcart-wrapper">
      <Container>
        {products.map((product) => (
          <ShoppingCartItem product={product} />
        ))}
        <div>
          <hr />
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
