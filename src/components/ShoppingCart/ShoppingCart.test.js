import { render, screen } from '@testing-library/react';
import React from 'react';
import ShoppingCart, { getPriceSubSum } from './ShoppingCart'

test('Sum SubPrice', () => {
    const products = [
        {
            id: 1,
            name: "Tomato Soup",
            price: "4.00",
            description: "This is soup made with tomatoes",
        },
        {
            id: 2,
            name: "Salad",
            price: "3.00",
            description: "Salad with dressing",
        },
        {
            id: 3,
            name: "Steak",
            price: "6.00",
            description: "Lorem Ipsum",
        },
        {
            id: 4,
            name: "Soup of the day",
            price: "3.50",
            description: "Ask the waiter for more information",
        },
    ];

    var SubPrice = getPriceSubSum(products)
    expect(SubPrice).toBe(16.5);
})