import React, {useState, useEffect} from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from "react-router-dom";

const ShoppingCart = ({tipTotal, setTipTotal}) => {

    const [dishes, setDishes] = useState([]);

    let shoppingCartDishes = JSON.parse(sessionStorage.getItem("ShoppingCartList"));

    let dishIDs = [];
    if (shoppingCartDishes != null) {
        for (let dish of shoppingCartDishes) {
            dishIDs.push(dish.dishId);
        }
    }

    const saveOrder = () => {
        async function onSaveOrder() {
            const order = {
                tableId: JSON.parse(sessionStorage.getItem("table")),
                orderStatus: "ToDo",
                totalPrice: GetPriceTotal(dishes, tipTotal),
                tip: tipTotal,
                dateTime: new Date()
            }

            console.log(order);

            const orderDto = {
                foodOrder: order,
                orderLines: shoppingCartDishes
            }

            await axios.post('http://localhost:9191/orders/create', orderDto,
            ).then();
        }

        onSaveOrder().then(r => clearLocalStorage())
    }

    useEffect(() => {
        const fetchDishes = async () => {
            const result = await axios.post(
                'http://localhost:9191/menu/dishes/all-in-shopping-cart',
                dishIDs
            );
            return result.data;
        }
        fetchDishes().then(r => setDishes(r));
    }, []);

    for (let dish of dishes) {
        dish.amount = 0;
        for (let shoppingCartDish of shoppingCartDishes) {
            if (dish.dishId === shoppingCartDish.dishId) {
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
                            <h4>{GetPriceSubtotal(dishes).toFixed(2)}</h4>
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
                            <h4>{GetPriceTotal(dishes, tipTotal).toFixed(2)}</h4>
                        </Col>
                    </Row>
                    <Link to="/checkout">
                        <Button className="orderButton" onClick={saveOrder}>
                            Order!
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ShoppingCart;

function clearLocalStorage(){
    sessionStorage.removeItem("ShoppingCartList");
    //Refresh Page
    window.location.reload(false)
}

export function GetPriceTotal(products, tipTotal) {
    return GetPriceSubtotal(products) + Number(tipTotal);
}

export function GetPriceSubtotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += parseFloat(products[i].price * products[i].amount);
    }
    return total;
}