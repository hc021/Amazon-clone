import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css'
import { useStateValue } from '../../data/StateProvider';
function CheckoutProduct({ index, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(index)
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:index,
        })
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (<StarIcon className="checkoutProduct-rating-star" key={i} />))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct
