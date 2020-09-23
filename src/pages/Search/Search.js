import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { useStateValue } from '../../data/StateProvider'
import '../Home/home.css'

function Search({ match }) {
    const [{ search, data, tempData }, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({
            type: "SET_DATA",
            search: match.params.parmas,
        })
    }, [])
    const handleClick = () => {
        dispatch({
            type: "RESET_DATA",
            reset: data,
        })
    };
    if (tempData.length===0) {
        return (
            <>
            <Link to="/search/all" onClick={handleClick}>Show All Product</Link>
                <h2>sorry, there is nothing match your input </h2>
            </>
        )
    }
    else {
        return (
            
                <>
                <Link to="/search/all" onClick={handleClick}>back</Link>
                <div className="home">
                    {/* <img src={banner} alt="banner" className="home_image" /> */}
                    <div className="home_row">
                        {tempData?.map((item, index) => (<Product key={index} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} limit={item.limit} />))}
                    </div>
                </div>
                </>
           
        )
    }

}
export default Search
