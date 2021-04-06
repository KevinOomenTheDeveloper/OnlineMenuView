import React from "react";
import "./ShoppingCart.sass";
import { Row, Col, Container, Button } from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";

function getPriceSum(products, tipTotal) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += parseFloat(products[i].price);
  }
  return total + Number(tipTotal);
}

const ShoppingCart = ({ products, tipTotal, setTipTotal, deleteItem }) => {
  return (
    <div className="wrapper">
      <Container>
        {products.map((product, idx) => (
          <div>
            <ShoppingCartItem product={product} />
            <Button className="btn btn-danger" onClick={() => deleteItem(idx)}>
              x
            </Button>
          </div>
        ))}
        <div>
          <hr />
          <Row>
            <Col>
              <h4>SubTotal</h4>
            </Col>
            <Col className="price">
              <h4>{getPriceSum(products, tipTotal).toFixed(2)}</h4>
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
              <h4>0.00</h4>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;
