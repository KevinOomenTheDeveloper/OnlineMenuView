import React, {useState, useEffect} from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ShoppingCart = ({tipTotal, setTipTotal}) => {

    const [dishes, setDishes] = useState([]);

    let shoppingCartDishes = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
    let dishIDs = [];
    for(let dish of shoppingCartDishes){
        dishIDs.push(dish.id);
    }

    const saveOrder = () => {
        async function onUseEffect() {

            const headers = { 'Content-Type': 'text/plain' };

            const order = {
                tableId: 1,
        }

            //DATA
            //Current Datetime
            //Order Status = ToDo (backend)
            //TableId = 1 (backend)
            //Get Tip
            //Get Total Price



            await axios.post(
                'http://localhost:9191/orders/create', order,
                {headers}
            ).then(response => {
                console.log(response.data);
            })
        }
        onUseEffect().then()
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
                {dishes.map((product) => (
                    <ShoppingCartItem product={product}/>
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
                            <h4>{getPriceTotal(dishes, tipTotal).toFixed(2)}</h4>
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

export function getPriceTotal(products, tipTotal) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += parseFloat(products[i].price * products[i].amount);
    }
    return total + Number(tipTotal);
}

export function GetPriceSubtotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += parseFloat(products[i].price * products[i].amount);
    }
    return total;
}