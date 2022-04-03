import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handelAddToCart }) => {

    const { name, picture, price } = tShirt
    return (
        <div className='t-shirt'>

            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : {price}</p>

            <button onClick={() => handelAddToCart(tShirt)}>Add To Cart</button>

        </div>
    );
};

export default TShirt;