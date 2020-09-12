import React from 'react'
import banner from './images/US_AU_1500x600_1218557_1136094_au_xsite_desktop_hero._CB436107284_.jpg'
import './home.css'
import Product from '../Product/Product'


function Home() {
    return (
        <div className="home">
            <img src={banner} alt="banner" className="home_image" />
            <div className="home_row">
                <Product id="123DualShock 4 Wireless Controller for PlayStation 4 - Magma Red" title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg" />
                <Product id="123" title="Oculus Quest All-in-one VR Gaming Headset – 128GB" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg" />

            </div>
            <div className="home_row">
                <Product id="123" title="BioShock Big Daddy Backpack" price={11.96}  rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51YWlGN4cuL._AC_SY200_.jpg" />
                <Product id="123" title="Xbox Wireless Controller - Black" price={11.96}  rating={5} image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg" />
                <Product id="123" title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver" price={11.96}  rating={5} image="https://images-na.ssl-images-amazon.com/images/I/41Kf0mndKyL._AC_SY200_.jpg" />
            </div>
            <div className="home_row">
            <Product id="123Libbey Mixologist 9-Piece Cocktail Set" title="Brita Water Replacement Filters for Pitchers and Dispensers, 3 Count, White" price="11.96" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/313I+J9L3jL._AC_SY200_.jpg" />
            </div>
        </div>
    )
}

export default Home
