import React from 'react'
import './subTotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../data/StateProvider';
import {subtotal} from '../../data/reducer'
function SubTotal() {
   
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items) :<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contain
                        </small>
                    </>
                )}
                decimalScale={2}
                value={subtotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
