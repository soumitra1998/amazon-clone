import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{cart}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            {cart.length===0?(
                <div>
                    <h1>your shopping basket is empty</h1>
                    <p>You have no items in your cart</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">shopping cart</h2>
                    {cart.map((item)=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            )}
            </div>
            {
                cart.length>0 &&(
                    <div className="checkout__right">
                        
                        <Subtotal/>
                    </div>
                )
            }
            
        </div>
    )
}

export default Checkout
