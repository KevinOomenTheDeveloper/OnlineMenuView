import React, {useState} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import './ShoppingCartItem.sass'
import {minusButtonClick, plusButtonClick} from '../../managers/AmountManager'

const ShoppingCartItem = ({ dish }) => {

    const [amount, setAmount] = useState(dish.amount);

    function renderCartItem()
    {
        if(amount != 0)
        {
            return (
                <div>
                    <hr className="shoppingcartitem-hr"/>
                    <Row>
                        <Col>
                            <h4>{dish.name}</h4>
                        </Col>
                        <Col className="price">
                            <h4>{dish.price * amount}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>{dish.description}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>{amount}x</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Button className="minus-button" onClick={() => setAmount(minusButtonClick(amount, dish.dishId))}>-</Button>
                        <h5 className="dish-amount">{amount}</h5>
                        <Button className="plus-button" onClick={() => setAmount(plusButtonClick(amount, dish.dishId))}>+</Button>
                    </Row>
                </div>
            );
        }
    }

    return (
        renderCartItem()
    );
};

export default ShoppingCartItem;