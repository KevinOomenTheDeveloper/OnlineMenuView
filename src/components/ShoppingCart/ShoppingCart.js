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
    const [priceTotal, setPriceTotal] = useState(0);
    const [priceSubTotal, setPriceSubTotal] = useState(0);

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
                tableId: 1,
                orderStatus: "ToDo",
                totalPrice: GetPriceTotal(dishes, tipTotal),
                tip: tipTotal,
                dateTime: new Date()
            }

            console.log(new Date())

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
        console.log(dishes);
        GetPriceTotal(dishes, tipTotal);
        
    }, []);

    for (let dish of dishes) {
        dish.amount = 0;
        for (let shoppingCartDish of shoppingCartDishes) {
            if (dish.dishId === shoppingCartDish.dishId) {
                dish.amount = shoppingCartDish.amount
            }
        }
    }

    function GetPriceTotal(products, tipTotal) {
        //console.log("dishes");
        setPriceTotal(GetPriceSubTotal(products) + Number(tipTotal));
    }
    
    function GetPriceSubTotal(products) {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += parseFloat(products[i].price * products[i].amount);
        }
        setPriceSubTotal(total);
        return total;
    }

    //Update Local Storage
    function UpdateSession(dishID, amount) {
        let shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));

        if (shoppingCartList != null) {
            let dish = shoppingCartList.find(x => x.dishId === dishID)
            if (dish != null) {
                dish.amount = amount
            } else {
                shoppingCartList.push({dishId: dishID, amount: amount});
            }
        } else {
            shoppingCartList = [{dishId: dishID, amount: amount}];
        }

        shoppingCartList = shoppingCartList.filter(i => i.amount > 0);
        sessionStorage.setItem("ShoppingCartList", JSON.stringify(shoppingCartList));

        let dish = dishes.find(d => d.dishId === dishID);
        if (dish != null) {
            dish.amount = amount
        }

        console.log(dishes.filter((i) =>{return i.amount > 0}));
        setDishes(dishes.filter((i) =>{return i.amount > 0}));

    }

    const onButtonClick = (dishId, amount) => {
        UpdateSession(dishId, amount);

        GetPriceTotal(dishes, tipTotal);
        console.log(dishes);
    }

    const changeAmount = (index, value) => {

        const copy = dishes
        console.log(dishes[index])
        console.log(dishes[index].amount)
        dishes[index].amount = value;
        console.log(dishes[index])
        console.log(dishes[index].amount)


        setDishes([...copy])
}

    return (
        <div className="shoppingcart-wrapper">
            <Container>
                {dishes.map((dish, i) => (
                    <ShoppingCartItem dish={dish} changeAmount={changeAmount} index={i}/>
                ))}
                <div>
                    <hr/>
                    <Row>
                        <Col>
                            <h4>SubTotal</h4>
                        </Col>
                        <Col className="price">
                            <h4>{priceSubTotal.toFixed(2)}</h4>
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
                            <h4>{priceTotal.toFixed(2)}</h4>
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