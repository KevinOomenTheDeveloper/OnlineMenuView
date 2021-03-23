import React from 'react'
import { Image, Button } from 'react-bootstrap'

const Category = () => {
    const imageClick = () => {
        alert('CLICKED')
    }

    return (
        <div>
            <h6>Name</h6>
            <Image
                src='https://images-ext-1.discordapp.net/external/l54ReplMW7jcDHDfF4-3CBqs3FvbJIhTaxFlxfGfbFA/%3Fcrop%3D1.00xw%3A0.753xh%3B0%2C0.0647xh%26resize%3D768%3A%2A/https/hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beste-sushi-amsterdam-1566315870.jpg'
                fluid
                onClick={imageClick}
            />
            <p>Category description</p>
        </div>
    )
}



export default Category
