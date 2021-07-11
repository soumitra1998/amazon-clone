import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

const Subtotal = () => {
    const [{cart}]=useStateValue();
    return (
        <div className="subtotal">
         
            <CurrencyFormat
                renderText={value => <div>
                    <p>subtotal ({cart.length}):<strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> this order contains gift
                    </small>
                    </div>} 
                value={getCartTotal(cart)}
                 displayType={'text'}
                thousandSeparator={true}
                 prefix='&#8377;'
             />
            <button>proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
