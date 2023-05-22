import React, {useContext} from "react";
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { CartItem } from "./cart-item";
import './cart.css';

import { useNavigate } from 'react-router-dom'
const Cart=()=>{

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const navigate = useNavigate();


    return(
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !==0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {getTotalCartAmount() > 0 ?(
            <div className="checkout">
                <p>Subtotal: $ {getTotalCartAmount()}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout (not working)</button>
            </div>
            ): (<h1>Your Cart is Empty</h1>)}
        </div>
    );
}
export default Cart;