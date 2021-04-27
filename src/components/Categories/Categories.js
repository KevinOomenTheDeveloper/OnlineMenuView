import React, {useState, useEffect} from "react";
import CategoriesItem from "./CategoriesItem";
import {Col, Row, Container} from "react-bootstrap";
import axios from "axios";
import "./Category.sass"

const Categories = () => {

    const [categories1, setItems] = useState([
        {
            id: 1,
            name: "Pasta",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
        },
        {
            id: 2,
            name: "Vlees",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png",
        },
        {
            id: 3,
            name: "Vis",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png",
        },
        {
            id: 4,
            name: "Soep",
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
        },
    ]);

    // get category by ID
    const [category, setCategory] = useState({});
    const [id, setId] = useState(1);

    return (
        <Container>
            <Row>
                {categories1.map((categorie) => (
                    <Col className="categories-column" sm={4}>
                        <CategoriesItem
                            Name={categorie.name}
                            ImageLink={categorie.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>

    );
};

export default Categories;
