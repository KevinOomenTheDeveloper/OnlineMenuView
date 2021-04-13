import React, { useState } from 'react';
import DishItem from './DishItem';
import { Col, Row, Button } from 'react-bootstrap';
import Container from "react-bootstrap/container";

const DishesByCategory = () => {
    const [Dishes] = useState([
        {
            id: 1,
            name: 'normale Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png',
            description: 'Dit is normale pasta'
        },
        {
            id: 2,
            name: 'warme Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png',
            description: 'Dit is warme pasta'
        },
        {
            id: 3,
            name: 'koude Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png',
            description: 'Dit is koude pasta'
        },
        {
            id: 4,
            name: 'quantum Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png',
            description: 'Dit is quantum pasta'
        }
    ]);

    const clearClick = () => {
        sessionStorage.clear();
    }

    return (
        <div>
            <Container >
                <Row>
                {Dishes.map((Dish,i) => (
                    <Col key={i} className='Column' sm={4}>
                        <DishItem ID={Dish.id} Name={Dish.name} ImageLink={Dish.image} Description={Dish.description} />
                    </Col>
                ))}
                </Row>
                <Button onClick={clearClick}>Clear session</Button>
            </Container>
        </div>
    )
}

export default DishesByCategory
