import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import './ShoppingCartItem.sass'
//import {minusButtonClick, plusButtonClick} from '../../managers/AmountManager'

const ShoppingCartItem = ({ dish, onButtonClick}) => {

    const [amount, setAmount] = useState(dish.amount);

    const buttonClick = (amount) =>
    {
        setAmount(amount);
    }

    useEffect(() => {
        //call function when something change in state
        onButtonClick(dish.dishId, amount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[amount]) 

    const plusButtonClick = (amount) => {
        setAmount(++amount);
        return amount;
    }
    
    const minusButtonClick = (amount) => {
        setAmount(--amount);
        return amount;
    }
    

    function renderCartItem()
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
                    <div className="shoppingcartitem-button-wrapper">
                        <Button className="shoppingcartitem-button" onClick={() => buttonClick(minusButtonClick(amount, dish.dishId))}>-</Button>
                        <Button className="shoppingcartitem-button" onClick={() => buttonClick(plusButtonClick(amount, dish.dishId))}>+</Button>
                    </div>

                </Row>
            </div>
        );
    }

    return (
        renderCartItem()
    );
};

export default ShoppingCartItem;