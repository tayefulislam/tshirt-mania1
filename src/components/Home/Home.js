import React from 'react';
import Cart from '../Cart/Cart'
import './Home.css'

const Home = () => {
    return (
        <div>

            <div className="home-container">
                <div className="tshirt-container">

                </div>

                <div className="cart-container">

                    <Cart></Cart>

                </div>
            </div>



        </div>
    );
};

export default Home;