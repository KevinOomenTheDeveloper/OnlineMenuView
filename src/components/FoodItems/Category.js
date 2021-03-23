import React from 'react'
import { Image } from 'react-bootstrap'

const Category = ({ Name, ImageLink }) => {
    const imageClick = () => {
        alert(Name + ' CLICKED')
    }

    return (
        <div>
            <h6>{Name}</h6>
            <Image
                src={ImageLink}
                fluid
                onClick={imageClick}
            />
        </div>
    )
}

export default Category
