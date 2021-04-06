import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ShoppingCartItem.sass";

const ShoppingCartItem = ({ product, setItems }) => {
  return (
    <div>
      <hr />
      <Row>
        <Col>
          <h4>{product.name}</h4>
        </Col>
        <Col className="price">
          <h4>{product.price}</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <h5>{product.description}</h5>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCartItem;
