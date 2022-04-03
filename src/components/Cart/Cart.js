import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeItemFormCart }) => {


    let commad;

    if (cart.length === 0) {
        commad = <p>Please Add some thing</p>

    }
    else if (cart.length === 1) {
        commad = <p>You can add more item</p>
    }



    else if (cart.length === 2) {
        commad = <p>Thanks for adding</p>
    }

    else if (cart.length > 2) {
        commad = <p></p>
    }

    return (
        <div>

            <h1> This is Cart {cart.length}</h1>



            {
                cart.map(item => <div className='cart-item'> <h4>{item.name}</h4>
                    <button onClick={() => removeItemFormCart(item)}>X</button>
                </div>)
            }

            {commad}

            {
                cart.length === 4 && <div> hello 4</div>
            }

            {
                cart.length === 6 || <div> <h1>OR Condition</h1></div>
            }

        </div>
    );
};

export default Cart;