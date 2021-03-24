import ProductDetails from './ProductDetails';
import ProductIngredients from './ProductIngredients'
import React, { useState, useEffect } from 'react';
import './CreateFood.css';

export default function CreateFood() {

    const [text, setText] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')
    const [allergy, setAllergy] = useState ('')
    const [categorys, setCategory] = useState ([  {
        id: "1",
        value: "Pasta",
    },
        {
            id: "2",
            value: "Meat",
        },
        {
            id: "3",
            value: "Fish",
        },
        {
            id: "4",
            value: "Test",
        }])


    return (

        <div>
            <div className="container">
                < ProductDetails />
                < ProductIngredients />


                <div className="buttonContainer">
                    <div className="divButtons">
                        <button type="button" className="btn btn-primary" >Add</button>
                        <button type="button" className="btn btn-light">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    )
}