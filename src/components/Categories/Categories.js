import React, { useState, useEffect } from "react";
import CategoriesItem from "./CategoriesItem";
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const Categories = () => {
  // get all categories
  const [categories, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9011/menu/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get category by ID
  const [category, setItems] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:9011/menu/categories/${id}`)
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // create category
  useEffect(() => {
    axios
      .post("http://localhost:9011/menu/categories/create", data)
      .then((res) => {
        console.log(res);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // update category
  useEffect(() => {
    axios
      .put("http://localhost:9011/menu/categories/update", data)
      .then((res) => {
        console.log(res);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container>
        <Row>
          {categories.map((categorie) => (
            <Col className="Column" sm={4}>
              <CategoriesItem
                Name={categorie.name}
                ImageLink={categorie.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
