import React from 'react'
import Category from './Category'
import {Col, Row} from 'react-bootstrap'

function FoodItems() {
    return (
        <div>
            Food items
            <Row>
                <Col xs={6}>
                     <Category />                     
                </Col>
                <Col xs={6}>
                     <Category />                     
                </Col>
            </Row>
            
        </div>
    )
}

export default FoodItems
