import React, {useState, useEffect} from "react";
import DishItem from "./DishItem";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/container";
import axios from "axios";

const CATEGORY_BY_NAME = "http://localhost:9191/menu/categories/name/";
const DISHES_BY_CATEGORYID = "http://localhost:9191/menu/dishes/category/";

const DishesByCategory = () => {

    const categoryName = window.location.pathname.split("/").pop()
    const [dishes, setDishes] = useState([]);

       useEffect(() => {
        const fetchCategoryByName = async () => {
            const result = await axios(CATEGORY_BY_NAME + categoryName);
            return result.data;
        }
        fetchCategoryByName().then(r =>
        {
            const fetchCategoryByName = async () => {
                const result = await axios(DISHES_BY_CATEGORYID + r.categoryId);
                return result.data;
            }
            fetchCategoryByName().then(r => setDishes(r))
        })
    }, []);



    return (
        <Container>
            <Row>
                {dishes.map((Dish) => (
                    <Col className="dishesByCategory-column" sm={4}>
                        <DishItem
                            dishID = {Dish.id}
                            Name={Dish.name}
                            ImageLink={Dish.imageUrl}
                            Description={Dish.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DishesByCategory;
