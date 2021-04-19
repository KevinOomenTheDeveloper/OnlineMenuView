import React, {useState, useEffect} from "react";
import DishItem from "./DishItem";
import {Col, Row, Button} from "react-bootstrap";
import Container from "react-bootstrap/container";
import axios from "axios";

const DishesByCategory = () => {
    const [Dishes] = useState([
        {
            id: 1,
            name: "normale Pasta",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
            description: "Dit is normale pasta",
        },
        {
            id: 2,
            name: "warme Pasta",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
            description: "Dit is warme pasta",
        },
        {
            id: 3,
            name: "koude Pasta",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
            description: "Dit is koude pasta",
        },
        {
            id: 4,
            name: "quantum Pasta",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
            description: "Dit is quantum pasta",
        },
    ]);

    // get all Dishes
    const [dishByCategories, setDishByCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:9011/menu/categories")
            .then((res) => {
                console.log(res);
                setDishByCategory(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    // get dish by ID
    const [dishByCategory, setDishByCategory] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios
            .get(`http://localhost:9011/menu/dishes/${id}`)
            .then((res) => {
                console.log(res);
                setDishByCategory(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    // create dish
    useEffect(() => {
        axios
            .post("http://localhost:9011/menu/dishes/create", dishByCategory)
            .then((res) => {
                console.log(res);
                console.log(dishByCategory);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    // update dish
    useEffect(() => {
        axios
            .put("http://localhost:9011/menu/dishes/update", dishByCategory)
            .then((res) => {
                console.log(res);
                console.log(dishByCategory);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <Container>
            <Row>
                {Dishes.map((Dish) => (
                    <Col className="dishesByCategory-column" sm={4}>
                        <DishItem
                            Name={Dish.name}
                            ImageLink={Dish.image}
                            Description={Dish.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DishesByCategory;
