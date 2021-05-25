import React, {useState, useEffect} from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ShoppingCart = () => {
    var [tipTotal, setTipTotal] = useState(0);
    var [total, setTotal] = useState(0);

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

    let shoppingCartDishes = [];
    var dishIDs = [];
    var shoppingCartData = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
    if(shoppingCartData != null) shoppingCartDishes = shoppingCartData;

    for(var dish of shoppingCartDishes) dishIDs.push(dish.id);

    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        const fetchDishes = async () => {
            const result = await axios.post(
                'http://localhost:9191/menu/dishes/all-in-shopping-cart',
                dishIDs
            );
            console.log(result.data)
            return result.data;
        }
        fetchDishes().then(r => setDishes(r));
    }, []);

    
    for(var dish of dishes)
    {
        dish.amount = 0;
        for(var shoppingCartDish of shoppingCartDishes)
        {
            if(dish.dishId == shoppingCartDish.id)
            {
                dish.amount = shoppingCartDish.amount
            }
        }
    }
    return (
        <div className="shoppingcart-wrapper">
            <Container>
                {dishes.map((dish) => (
                    <ShoppingCartItem dish={dish}/>
                ))}
                <div>
                    <hr/>
                    <Row>
                        <Col>
                            <h4>SubTotal</h4>
                        </Col>
                        <Col className="price">
                            <h4>{getPriceSubSum(dishes).toFixed(2)}</h4>
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
                            <h4>{getPriceSum(dishes, tipTotal).toFixed(2)}</h4>
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

export function getPriceSum(dishes, tipTotal) {
    
    let total = 0;
    for(var dish of dishes)
    {
        console.log("price and amount:" + dish.price, dish.amount)
        total += parseFloat(dish.price * dish.amount);
    }
    console.log("total:" + total);
    return total + Number(tipTotal);
}

export function getPriceSubSum(dishes) {
    let total = 0;
    for(var dish of dishes)
    {
        total += parseFloat(dish.price * dish.amount);
    }
    return total;
}

export function amountChanged()
{
    
}