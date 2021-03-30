import React from 'react'
import { Card} from 'react-bootstrap'
import "./Category.sass"

const CategoriesItem = ({ Name, ImageLink }) => {
    const imageClick = () => {
        alert(Name + ' CLICKED')
    }

    return (

        <Card onClick={imageClick}>
            <Card.Header>{Name}</Card.Header>
            <Card.Img className='CardImage' src={ImageLink} />
        </Card>
    );
}

export default CategoriesItem
