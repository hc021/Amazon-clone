import React from 'react'
import './menu.css'
import ClearIcon from '@material-ui/icons/Clear';

function Menu({ status }) {
    const handleMenu = () => {
        const action = document.querySelector(".menu-list");
        action.classList.toggle("move-right-for-list");
        action.classList.toggle("move-left-for-list");
        document.querySelector(".clearIcon-box").classList.toggle("clearIcon-opacity")
        document.body.classList.toggle('body');
        setTimeout(()=>(document.querySelector(".menu").classList.toggle("displayMenu")),600)
    };
    return (
        <div className={"menu"}>
            <div className="clearIcon-box" onClick={handleMenu}>
                <ClearIcon className="clearIcon" />
            </div>
            <div className="menu-list">
                <h3>SHOP BY CATEGORY</h3>
                <li>Amazon Music</li>
                <li>Kindle E-readers & Books</li>
                <li>Appstore for Android</li>
                <li>Electronics</li>
                <li>Computers</li>
                <li>Smart Home</li>
                <li>Arts & Crafts</li>
                <li>Automotive</li>
                <li>Baby</li>
                <li>Beauty and personal care</li>
                <li>Women's Fashion</li>
                <li>Men's Fashion</li>
                <li>Girls' Fashion</li>
                <li>Boys' Fashion</li>
                <li>Health and Household</li>
                <li>Home and Kitchen</li>
                <li>Industrial and Scientific</li>
                <li>Luggage</li>
                <li>Movies & Television</li>
                <li>Pet supplies</li>
                <li>Software</li>
                <li>Sports and Outdoors</li>
                <li>Tools & Home Improvement</li>
                <li>Toys and Games</li>
                <li>Video Games</li>
                <li>Gift Cards</li>
                <li>#FoundItOnAmazon</li>
                <li>Amazon Live</li>
                <li>International Shopping</li>
                <li>Amazon Second Chance</li>
                <li>Full Store Directory</li>
            </div>

        </div>
    )
}

export default Menu


