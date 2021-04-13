import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import "./DishesByCategory.sass"

const DishItem = ({ ID, Name, ImageLink, Description }) => {
    
    var [Amount, SetAmount] = useState(0);
    const plusButtonClick = e => {
        SetAmount(Amount++);
        console.log(Amount);
        UpdateSession();
       

        //sessionStorage.setItem("ShoppingCardList","value");
        /*if(){
            sessionStorage.setItem("ShoppingCardList", ID);
            alert(sessionStorage.getItem("ShoppingCardList"));
        }else
        {
            var shoppingCardList = sessionStorage.getItem("ShoppingCardList") + "," + ID
            sessionStorage.setItem("ShoppingCardList", shoppingCardList);
            alert(sessionStorage.getItem("ShoppingCardList"));
        }*/

        /*var Data = { 
            id: ID,
            amount: 
        }*/
        
        //alert(JSON.stringify(shoppingCartList));
    }

    const minusButtonClick = e => {
        SetAmount(Amount--);
        UpdateSession();
    }

    function UpdateSession()
    { 
        var shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
        var alreadyExists = false;
        
        if(shoppingCartList != null)
        {
            for(var shoppingCartItem of shoppingCartList)
            {
                if(shoppingCartItem.id == ID)
                {
                    shoppingCartItem.amount = Amount;
                    alreadyExists = true;
                    console.log(JSON.stringify(shoppingCartList));
                }
            }

            if(!alreadyExists)
            {
                shoppingCartList.push({id: ID, amount: 1});
                alreadyExists = true;
                console.log(JSON.stringify(shoppingCartList));
            }
        }

        if(!alreadyExists)
        {
            shoppingCartList = [{id: ID, amount: 1}];
            console.log(JSON.stringify(shoppingCartList));
        }
        sessionStorage.setItem("ShoppingCartList", JSON.stringify(shoppingCartList));
    }

    return (

        <Card>
            <Card.Header>{Name}</Card.Header>
            <Card.Img className='card-image' src={ImageLink} />
            <Card.Body className="card-body">
                <Card.Text>{Description}</Card.Text>
                {Amount != "0" && <Button className="minus-button"  onClick={minusButtonClick}>-</Button>}
                <Card.Text className="dish-amount">{Amount}</Card.Text>
                <Button className="plus-button" onClick={plusButtonClick}>+</Button>
            </Card.Body>
        </Card>
    );
}

export default DishItem
