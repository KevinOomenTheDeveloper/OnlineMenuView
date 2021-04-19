import React from 'react'
import { Card} from 'react-bootstrap'
import "./CategoryItem.sass"
import { Link } from "react-router-dom";

const CategoriesItem = ({ Name, ImageLink}) => {

    return (
        <div className="categoriesItem-wrapper">
            <Link to="/dishesbycategory">
                <Card>
                    <Card.Header>{Name}</Card.Header>
                    <Card.Img className='categoryItem-CardImage' src={ImageLink} />
                </Card>
            </Link>
        </div>
    );
}

export default CategoriesItem
