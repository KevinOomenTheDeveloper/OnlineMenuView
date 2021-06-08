import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import './ShoppingCartItem.sass'
//import {minusButtonClick, plusButtonClick} from '../../managers/AmountManager'

const ShoppingCartItem = ({ dish, onButtonClick, changeAmount, index}) => {

    /*const buttonClick = (amount) =>
    {
        setAmount(amount);
    }*/

    useEffect(() => {
        //call function when something change in state
        onButtonClick(dish.dishId, dish.amount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dish.amount]) 

    const plusButtonClick = () => {
        changeAmount(index, ++dish.amount);
    }
    
    const minusButtonClick = () => {
        changeAmount(index, --dish.amount);
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
                        <h4>{dish.price * dish.amount}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>{dish.description}</h5>
                    </Col>
                </Row>
                <Row>
                    <div className="shoppingcartitem-button-wrapper">
                        <h5 className="dish-amount">{dish.amount}</h5>
                        <Button className="shoppingcartitem-button" onClick={() => minusButtonClick()}>-</Button>
                        <Button className="shoppingcartitem-button" onClick={() => plusButtonClick()}>+</Button>
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