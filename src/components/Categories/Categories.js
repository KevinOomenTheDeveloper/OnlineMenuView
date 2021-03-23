import React from 'react'
import CategoriesItem from './CategoriesItem'
import { Col, Row } from 'react-bootstrap'
import Container from "react-bootstrap/container";

const Categories = () => {

    let DefaultImage = 'https://images-ext-1.discordapp.net/external/l54ReplMW7jcDHDfF4-3CBqs3FvbJIhTaxFlxfGfbFA/%3Fcrop%3D1.00xw%3A0.753xh%3B0%2C0.0647xh%26resize%3D768%3A%2A/https/hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beste-sushi-amsterdam-1566315870.jpg'
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3}>
                        <CategoriesItem Name='Pasta' ImageLink={DefaultImage} />
                    </Col>
                    <Col xs={6}>
                        <CategoriesItem Name='Vis' ImageLink={DefaultImage} />
                    </Col>
                    <Col xs={3}>
                        <CategoriesItem Name='Soep' ImageLink={DefaultImage} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CategoriesItem Name='Vlees' ImageLink={DefaultImage} />
                    </Col>
                    <Col>
                        <CategoriesItem Name='IJs' ImageLink={DefaultImage} />
                    </Col>
                    <Col>
                        <CategoriesItem Name='Taart' ImageLink={DefaultImage} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <CategoriesItem Name='Pizza' ImageLink={DefaultImage} />
                    </Col>
                    <Col xs={6}>
                        <CategoriesItem Name='Friet' ImageLink={DefaultImage} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <CategoriesItem Name='Snacks' ImageLink={DefaultImage} />
                    </Col>
                    <Col xs={6}>
                        <CategoriesItem Name='Chinees' ImageLink={DefaultImage} />
                    </Col>
                    <Col xs={3}>
                        <CategoriesItem Name='Salade' ImageLink={DefaultImage} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories
