import React, {useState, useEffect} from "react";
import CategoriesItem from "./CategoriesItem";
import {Col, Row, Container} from "react-bootstrap";
import axios from "axios";
import "./Category.sass"

const ALL_CATEGORIES = "http://localhost:9191/menu/categories/all";


const Categories = () => {

    // get all categories
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const result = await axios(ALL_CATEGORIES);
            console.log(result.data)
            return result.data;
        }
        fetchCategories().then(r => setCategories(r));
    }, []);

    return (
        <Container>
            <Row>
                {categories.map((category) => (
                    <Col className="categories-column" sm={4}>
                        <CategoriesItem
                            Name={category.name}
                            ImageLink={category.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </Container>

    );
};

export default Categories;
