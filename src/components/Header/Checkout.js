import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Checkout({path,price}) {
    return (
        <Link to={path}>
            <div className="header_optionBasket">
                <ShoppingBasketIcon className="header_link" />
                <span className="header_link">{price}</span>
            </div>
        </Link>
    )
}

export default Checkout
