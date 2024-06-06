import React from 'react'
import { useState } from 'react';
const Complex = () => {
    const [person, setPerson] = useState ({
        name: 'John Doe',
        age: 45,
        email: 'johndoe@google.com',
        location: 'London',
    });
    const changeLocation  = () => {
      setPerson({...person, location: 'Washington', age: 46});
    };
   
    const cartItems = [
      {id:1, item: 'Sneakers', price: 65},
      {id:2, item: 'Hoodie', price: 60},
      {id:3, item: 'Cap', price: 32},
    ];
    const [cart, setCart] = useState(cartItems);
    const clearCart = () => {
      setCart([]);
    };
    const bringBack = () => {
      setCart(cartItems);
    };
    const removeItems = (cartId) => {
      const leftOverItems = cart.filter((product) => product.id !== cartId);
      setCart(leftOverItems);
    };
  return (
    <div>
        <h1>Complex State</h1>
        <span>{person.name}</span>
        <span>{person.age}</span>
        <span>{person.email}</span>
        <span>{person.location}</span>
        <button onClick={changeLocation}>Change Location</button>
        <h1>Arrays</h1>
        <h3>Shopping Cart</h3>
        {cart.map((product, i) => {
          return (
            <div key = {i}>
              <span>{product.item}</span>
              <span>${product.price}</span>
              <button onClick={() => removeItems(product.id)}>---</button>
            </div>
          );
        })};
         <button onClick={clearCart}>Clear Cart</button>
         <button onClick={bringBack}>Populate Cart</button>
    </div>
  );
};

export default Complex;