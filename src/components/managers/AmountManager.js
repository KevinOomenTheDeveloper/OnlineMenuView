export const plusButtonClick = (amount, id) => {
    console.log("Amount: " + amount + " ID:" + id)
    ++amount;
    UpdateSession(amount, id);
    return amount;
}

export const minusButtonClick = (amount, id) => {
    --amount;
    UpdateSession(amount, id);
    return amount;
}

function UpdateSession(amount, id)
{
    console.log("Amount: " + amount + " ID:" + id)
    let shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
    var alreadyExists = false;

    if(shoppingCartList != null)
    {
        for(var shoppingCartItem of shoppingCartList)
        {
            if(shoppingCartItem.id == id)
            {
                shoppingCartItem.amount = amount;
                alreadyExists = true;
            }
        }

        if(!alreadyExists)
        {
            shoppingCartList.push({id: id, amount: 1});
            alreadyExists = true;
        }
    }

    else
    {
        if(!alreadyExists)
        {
            shoppingCartList = [{id: id, amount: 1}];
        }
    }

    shoppingCartList = shoppingCartList.filter(i => i.amount > 0);

    sessionStorage.setItem("ShoppingCartList", JSON.stringify(shoppingCartList));
}