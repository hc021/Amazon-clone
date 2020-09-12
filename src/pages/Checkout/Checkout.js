import React from 'react'
import { useStateValue } from '../../data/StateProvider'
import './checkout.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import SubTotal from './SubTotal';



function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/3rd/GCapp/bgc_banner_update_ap_EN_1024x90_20200807.jpg" alt="ad" />
                {basket.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no items in your basket.</p>
                    </div>
                )
                    : (
                        <div>
                            <h2 className="checkout_title">Your shopping basket</h2>
                            {basket?.map((item, index) => (
                                <CheckoutProduct index={index} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length>0&&(
                <div className="checkout_right">
                   
                   <SubTotal />
                </div>

            )}
        </div>
    )
}

export default Checkout
