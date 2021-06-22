import React, { useState, useEffect } from "react";
import DishItem from "./DishItem";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/container";
import axios from "axios";

const DISHES_BY_CATEGORY_NAME = "http://localhost:9191/menu/dishes/category/";

const DishesByCategory = () => {

    const categoryName = window.location.pathname.split("/").pop()
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchCategoryByName = async () => {
            const result = await axios(DISHES_BY_CATEGORY_NAME + categoryName);
            return result.data;
        }
        fetchCategoryByName().then(r => setDishes(r))
    }, []);

    function findAmount(dishId) {
        let shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
        if (shoppingCartList == null)
            return 0;
        const dish = shoppingCartList.find(x => x.dishId === dishId)
        if (dish != null)
            return dish.amount
        else return 0;
    }

    return (
        <Container>
            <Row>
                {(() => {
                    if (dishes.length > 0) {
                        return (dishes.map((Dish) => (
                            <Col className="dishesByCategory-column" sm={4}>
                                <DishItem
                                    dishID={Dish.dishId}
                                    Name={Dish.name}
                                    ImageLink={Dish.imageUrl}
                                    Description={Dish.description}
                                    Amount={findAmount(Dish.dishId)}
                                />
                            </Col>
                        )));
                    }
                    else {
                        return (<label>Sorry, we didn't find any dish for this category. Please contact the waiter.</label>);
                    };
                })()}
            </Row>
        </Container>
    );
};

export default DishesByCategory;
