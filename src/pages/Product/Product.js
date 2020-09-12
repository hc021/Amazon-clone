import React from 'react'
import './product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../data/StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, image, price, rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_,i) => {
                            return <StarIcon key={i} className="rating-star" />
                        })
                    }
                </div>

            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
