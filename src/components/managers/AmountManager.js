export const plusButtonClick = (amount, id) => {
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
    let shoppingCartList = JSON.parse(sessionStorage.getItem("ShoppingCartList"));
    var alreadyExists = false;

    if(shoppingCartList != null)
    {
        for(var shoppingCartItem of shoppingCartList)
        {
            if(shoppingCartItem.dishId == id)
            {
                shoppingCartItem.amount = amount;
                alreadyExists = true;
            }
        }

        if(!alreadyExists)
        {
            shoppingCartList.push({dishId: id, amount: 1});
        }
    }

    else
    {
        if(!alreadyExists)
        {
            shoppingCartList = [{dishId: id, amount: 1}];
        }
    }

    shoppingCartList = shoppingCartList.filter(i => i.amount > 0);

    sessionStorage.setItem("ShoppingCartList", JSON.stringify(shoppingCartList));
}