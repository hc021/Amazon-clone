import React, { useState } from 'react'
import './menu.css'
import ClearIcon from '@material-ui/icons/Clear';
import { useStateValue } from '../../../data/StateProvider'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Electronics from './Electronics/Electronics';
// import * as App from '../../modules/Menu/Menu.js'

function Menu() {
    const [{ user }] = useStateValue();

    const action = document.querySelector(".menu-list");
    const electronicsList = document.querySelector(".electronics-list");
    const categoryList = document.querySelector(".categorys");

    const handleMenu = () => {
        action.classList.toggle("move-right-for-list");
        action.classList.toggle("move-left-for-list");
        categoryList.classList.remove('ele-moveLeft')
        document.querySelector(".clearIcon-box").classList.toggle("clearIcon-opacity")
        document.body.classList.toggle('body');
        setTimeout(() => (document.querySelector(".menu").classList.toggle("displayMenu")), 600)
    };
    const electronics = () => {
        categoryList.classList.add('ele-moveLeft')
        action.classList.add('scroll-switchOff');
    };
    return (
        <div className="menu">
            <div className="clearIcon-box" onClick={handleMenu}>
                <ClearIcon className="clearIcon" />
            </div>
            <div className={`menu-list`}>
                <div className="user-box">
                    {user ? <h2 className="user-title">{`Hello ${user?.email}`}</h2>
                        : <Link className="user-login-link" onClick={handleMenu} to="/login"><AccountCircleIcon /> <span>Hello, Sign in</span></Link>}
                </div>
                <div className={`categorys`}>
                    <h3>SHOP BY CATEGORY</h3>
                    <li><span>Amazon Music</span><ChevronRightIcon /></li>
                    <li><span>Kindle E-readers & Books</span><ChevronRightIcon /></li>
                    <li><span>Appstore for Android</span><ChevronRightIcon /></li>
                    <li onClick={electronics}><span>Electronics</span><ChevronRightIcon /></li>
                    <li><span>Computers</span><ChevronRightIcon /></li>
                    <li><span>Smart Home</span><ChevronRightIcon /></li>
                    <li><span>Arts & Crafts</span><ChevronRightIcon /></li>
                    <li><span>Automotive</span><ChevronRightIcon /></li>
                    <li><span>Baby</span><ChevronRightIcon /></li>
                    <li><span>Beauty and personal care</span><ChevronRightIcon /></li>
                    <li><span>Women's Fashion</span><ChevronRightIcon /></li>
                    <li><span>Men's Fashion</span><ChevronRightIcon /></li>
                    <li><span>Girls' Fashion</span><ChevronRightIcon /></li>
                    <li><span>Boys' Fashion</span><ChevronRightIcon /></li>
                    <li><span>Health and Household</span><ChevronRightIcon /></li>
                    <li><span>Home and Kitchen</span><ChevronRightIcon /></li>
                    <li><span>Industrial and Scientific</span><ChevronRightIcon /></li>
                    <li><span>Luggage</span><ChevronRightIcon /></li>
                    <li><span>Movies & Television</span><ChevronRightIcon /></li>
                    <li><span>Pet supplies</span><ChevronRightIcon /></li>
                    <li><span>Software</span><ChevronRightIcon /></li>
                    <li><span>Sports and Outdoors</span><ChevronRightIcon /></li>
                    <li><span>Tools & Home Improvement</span><ChevronRightIcon /></li>
                    <li><span>Toys and Games</span><ChevronRightIcon /></li>
                    <li><span>Video Games</span><ChevronRightIcon /></li>
                    <li><span>Gift Cards</span><ChevronRightIcon /></li>
                    <li><span>FoundItOnAmazon</span><ChevronRightIcon /></li>
                    <li><span>Amazon Live</span><ChevronRightIcon /></li>
                    <li><span>International Shopping</span><ChevronRightIcon /></li>
                    <li><span>Amazon Second Chance</span><ChevronRightIcon /></li>
                    <li><span>Full Store Directory</span><ChevronRightIcon /></li>
                    <Electronics menu_list={action} itself={electronicsList} categroy={categoryList} />
                </div>
            </div>

        </div>
    )
}

export default Menu


