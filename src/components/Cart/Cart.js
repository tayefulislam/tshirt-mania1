import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeItemFormCart }) => {

    return (
        <div>

            <h1> This is Cart {cart.length}</h1>

            {
                cart.map(item => <div className='cart-item'> <h4>{item.name}</h4>
                    <button onClick={() => removeItemFormCart(item)}>X</button>
                </div>)
            }

        </div>
    );
};

export default Cart;