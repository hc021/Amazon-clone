import React from 'react'
import './product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../data/StateProvider';
import { Link } from 'react-router-dom';


function Product({ id, title, price, rating, image ,limit}) {
    const [{ basket, data }, dispatch] = useStateValue();


    const addToBasket = () => {
        let count = 0;
        basket.forEach(element => ((element.id === id) && count++));
        if (limit != 0 && limit <= count) alert("The limit for buying this item is " + count)
        else {
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id, title, image, price, rating
                }
            })
        }
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
                        Array(rating).fill().map((_, i) => {
                            return <StarIcon key={i} className="rating-star" />
                        })
                    }
                </div>

            </div>
            <Link className="product-link" to={`/${id}`}><img src={image} alt={title} /></Link>


            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
