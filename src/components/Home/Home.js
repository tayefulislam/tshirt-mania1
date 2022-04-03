import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirts';
import Cart from '../Cart/Cart'
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {


    const [tShirts, setTShirts] = useTShirt()

    const [cart, setCart] = useState([])


    const handelAddToCart = (seletedItem) => {

        const exists = cart.find(item => item.id === seletedItem.id)

        if (!exists) {
            const newCart = [...cart, seletedItem]
            setCart(newCart)

        }
        else {
            alert(seletedItem.name + ' Already exists in cart')
        }


    }


    const removeItemFormCart = (seletedItem) => {

        const rest = cart.filter(item => item.id !== seletedItem.id)
        setCart(rest)

    }


    return (
        <div>

            <div className="home-container">
                <div className="tshirt-container">

                    {
                        tShirts.map(tShirt => <TShirt key={tShirt.id}
                            tShirt={tShirt}
                            handelAddToCart={handelAddToCart}></TShirt>)
                    }

                </div>

                <div className="cart-container">

                    <Cart cart={cart} removeItemFormCart={removeItemFormCart}></Cart>

                </div>
            </div>



        </div>
    );
};

export default Home;