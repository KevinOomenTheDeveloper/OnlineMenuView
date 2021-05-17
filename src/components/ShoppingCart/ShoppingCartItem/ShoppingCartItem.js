import React, {useState} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import './ShoppingCartItem.sass'


const ShoppingCartItem = ({ product }) => {

    let shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));

    var [amount, setAmount] = useState(product.amount);
    const [ID, setID] = useState(product.id);
    const plusButtonClick = e => {
        setAmount(++amount);
        UpdateSession();
    }

    const minusButtonClick = e => {
        setAmount(--amount);
        UpdateSession();
    }

    if(shoppingCartList != null)
    {
        for(var shoppingCartItem of shoppingCartList)
        {
            if(shoppingCartItem.id == ID)
            {
                amount = shoppingCartItem.amount
            }
        }
    }

    function UpdateSession()
    {
        shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
        var alreadyExists = false;

        if(shoppingCartList != null)
        {
            for(var shoppingCartItem of shoppingCartList)
            {
                if(shoppingCartItem.id === ID)
                {
                    shoppingCartItem.amount = amount;
                    alreadyExists = true;
                }
            }

            if(!alreadyExists)
            {
                shoppingCartList.push({id: ID, amount: 1});
                alreadyExists = true;
            }
        }

        else
        {
            if(!alreadyExists)
            {
                shoppingCartList = [{id: ID, amount: 1}];
            }
        }

        shoppingCartList = shoppingCartList.filter(i => i.amount > 0);

        sessionStorage.setItem("ShoppingCartList", JSON.stringify(shoppingCartList));
    }

    return (
        <div>
            <hr className="shoppingcartitem-hr"/>
            <Row>
                <Col>
                    <h4>{product.name}</h4>
                </Col>
                <Col className="price">
                    <h4>{product.price * amount}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>{product.description}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>{amount}x</h5>
                </Col>
            </Row>
            <Row>
                {amount != 0 &&<Button className="minus-button"  onClick={minusButtonClick}>-</Button>}
                <h5 className="dish-amount">{amount}</h5>
                <Button className="plus-button" onClick={plusButtonClick}>+</Button>
            </Row>
        </div>

    );
};

export default ShoppingCartItem;