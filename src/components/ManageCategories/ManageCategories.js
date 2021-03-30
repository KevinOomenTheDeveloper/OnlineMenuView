import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ManageCategories() {
    const OnRemove = (categorieID) => {
        alert(`${categorieID} Removed`);

        for (let i = categories.length - 1; i >= 0; i--) {
            if (categories[i].id === categorieID) {
                categories.splice(i, 1);
                break;
            }
        }

        setCategories([...categories]);
    }

    const [categories, setCategories] = useState([
        {
            id: 0,
            name: 'Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png'
        },
        {
            id: 1,
            name: 'Vlees',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png'
        },
        {
            id: 2,
            name: 'Vis',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png'
        },
        {
            id: 3,
            name: 'Soep',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png'
        }
    ])

    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        {categories.map((categorie) => (
                            <Row>
                                <Col className='Column' sm={2}>
                                    <label>{categorie.name}</label>
                                </Col>

                                <Col className='Column' sm={2}>
                                    <button className='btn btn-danger' onClick={() => OnRemove(categorie.id)}>X</button>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManageCategories
