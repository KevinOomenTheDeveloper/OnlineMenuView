import React from 'react'
import Category from './Category'
import { Col, Row } from 'react-bootstrap'
import Container from "react-bootstrap/container";

const FoodItems = () => {
    return (
        <div>
            Food items
            <Container>
                <Row>
                    <Col xs={3}>
                        <Category Name='Pasta' />
                    </Col>
                    <Col xs={6}>
                        <Category Name='Vis' />
                    </Col>
                    <Col xs={3}>
                        <Category />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Category />
                    </Col>
                    <Col>
                        <Category />
                    </Col>
                    <Col>
                        <Category />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Category />
                    </Col>
                    <Col xs={6}>
                        <Category />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <Category />
                    </Col>
                    <Col xs={2}>
                        <Category />
                    </Col>
                    <Col xs={2}>
                        <Category />
                    </Col>
                    <Col xs={2}>
                        <Category />
                    </Col>
                    <Col xs={2}>
                        <Category />
                    </Col>
                    <Col xs={2}>
                        <Category />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Category />
                    </Col>
                    <Col xs={6}>
                        <Category />
                    </Col>
                    <Col xs={3}>
                        <Category />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FoodItems
