import React, { useEffect, useState } from 'react'
import banner from './images/US_AU_1500x600_1218557_1136094_au_xsite_desktop_hero._CB436107284_.jpg'
import './home.css'
import Product from '../../components/Product/Product'
import { useStateValue } from '../../data/StateProvider'
import Header from '../../components/Header/Header'


function Home() {
    const [{ data, },dispatch] = useStateValue();

    
        return (
            
            //  {/* <Header  handleClick={handleClick}/> */}
              <div className="home">
                <img src={banner} alt="banner" className="home_image" />
                <div className="home_row">
                    {data?.map((item, index) => (index < 8 && <Product key={index} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} limit={item.limit} />))}
                </div>
                <div className="home_row_two">
                    {data?.map((item, index) => ((index >= 8 && index < 10) && <Product key={index} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} limit={item.limit} />))}
                </div>
                <div className="three">
                    {data?.map((item, index) => ((index >= 10) && <Product key={index} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} limit={item.limit} />))}
                </div>
            </div>
            
           
        )
    
}

export default Home
