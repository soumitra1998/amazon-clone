import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{cart},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        console.log("remove")
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id
        })

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"src={image} alt="checkoutProduct" />
           <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>remove from cart</button>
            </div>
            
            
        </div>

       
    )
}

export default CheckoutProduct
