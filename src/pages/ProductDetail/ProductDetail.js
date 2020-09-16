import React from 'react'
import { useStateValue } from '../../data/StateProvider'
import './productDetail.css';
import StarIcon from '@material-ui/icons/Star';
import Page404 from '../Page404';



function ProductDetail({ match }) {
    const [{ basket, data }, dispatch] = useStateValue();
    const tempId = match.params.params;
    const item = data.find(item => (item.id === tempId))
    console.log(item)
    const addToBasket = () => {
        let count = 0;
        basket.forEach(element => ((element.id === tempId) && count++));
        if (item.limit!=0 && item.limit<= count) alert("The limit for buying this item is " + count)
        else {
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: item.id, title: item.title, image: item.image, price: item.price, rating: item.rating, limit: item.limit
                }
            })
        }
    };
    return item ?
        (
            <div className="product_detail">
                <img src={item.image} alt={item.title} />
                <div className="product_detail_info">
                    <p>{item.title}</p>
                    <p className="product_detail_price">
                        <small>$</small>
                        <strong>{item.price}</strong>

                    </p>
                    <p><strong>{item.limit === 0 ? "" : `Limit is ${item.limit}`}</strong></p>
                    <div className="product_detail_rating">
                        {
                            Array(item.rating).fill().map((_, i) => {
                                return <StarIcon key={i} className="rating-star" />
                            })
                        }
                    </div>
                    <button onClick={addToBasket}>Add to basket</button>
                </div>

            </div>

        ) :
        (
            <Page404 />
        )
}

export default ProductDetail
