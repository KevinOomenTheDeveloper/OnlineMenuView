import React from 'react';
import { useState } from 'react'


export default function ProductDetails() {

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
    const [ingredients, setIngredient] = useState (['Union', 'Garlic', 'Lemon'])

    const [btnAddItems, setBtnAddItems] = useState ([])

    const addInfo = () => {
        setBtnAddItems([...btnAddItems, {
            id: btnAddItems.length,
            value: "",
        }])
    }

    return (
        <>
            <div className="productDetails">
                <form className="form-inline">

                    <div className="form-group mx-sm-3 mb-2">
                        <label for="staticEmail2" className="sr-only">Name</label>
                        <input type="text" className="form-control" id="inputPassword2" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Description</label>
                        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}>

              </textarea>
                    </div>


                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" className="sr-only">Price</label>
                        <input type="number" className="form-control" id="inputPassword2" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>



                    <div className="form-group mx-sm-3 mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Vegan
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label className="form-check-label" for="flexCheckChecked">
                                Low in salt
                            </label>
                        </div>
                    </div>


                    <div className="form-group mx-sm-3 mb-2" id="test">
                        <label for="inputPassword2" className="sr-only">Category</label>
                        <select className="form-control" id="category" name="category">

                            {categorys.map(category => (
                                <option value={category.value}>{category.value}</option>
                            ))}
                        </select>
                    </div>

                </form>

            </div>
        </>
    )
}
