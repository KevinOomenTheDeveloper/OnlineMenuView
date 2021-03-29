import React, { useState } from 'react'
import CategoriesItem from './CategoriesItem'
import { Col, Row } from 'react-bootstrap'
import Container from "react-bootstrap/container";

const Categories = () => {
    const [categories, setItems] = useState([
        {
            id: 1,
            name: 'Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png'
        },
        {
            id: 2,
            name: 'Vlees',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png'
        },
        {
            id: 3,
            name: 'Vis',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png'
        },
        {
            id: 4,
            name: 'Soep',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png'
        }
    ])

    return (
        <div>
            <Container >
                <Row>
                {categories.map(categorie => (
                    <Col className='Column' sm={4}>
                        <CategoriesItem Name={categorie.name} ImageLink={categorie.image} />
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Categories
