import React from 'react'
import logo from './images/amazon_PNG11.png'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

import HeaderLink from './HeaderLink';
import Checkout from './Checkout'
import { useStateValue } from '../../data/StateProvider'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu'
import { useState } from 'react'
import { auth } from '../../firebase'





function Header() {
    const header =
        { url: "/login", span1Txt: "hello", span2Txt: "Sign in" }
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            window.confirm("Do you want to Sign out?")&&auth.signOut();
        }
    };
    const displayMenu = () => {
        // setShowMenu({status:true})
        const menuList = document.querySelector(".menu-list");
        document.body.classList.toggle("body");
        document.querySelector(".menu").classList.toggle("displayMenu")
        document.querySelector(".clearIcon-box").classList.remove("clearIcon-opacity")
        menuList.classList.remove("move-left-for-list");
        setTimeout(() => (menuList.classList.toggle("move-right-for-list")), 100);
    }
    return (
        <>
            <Menu />
            <nav className="header">
                <div className="menu-bar" onClick={displayMenu}>
                    <MenuIcon className="menu-bar-icon" />
                </div>
                <Link to="/">
                    <img className="header_logo" src={logo} alt="logo" />
                </Link>
                <div className="header-search">
                    <input type="text" className="header_searchInput" />
                    <SearchIcon className="header_searchIcon" />
                </div>

                <div className="header_nav">
                    <HeaderLink path={!user && "/login"} span1={user ? `Hello ${user?.email}` : "Hello"} span2={user ? "sign out" : "sign in"} click={login} />
                    <HeaderLink path="/login" span1="Returns" span2="& Orders" />
                    <HeaderLink path="/checkout" span1="Your" span2="Prime" />

                    <Checkout path="/checkout" price={basket?.length} />
                </div>
                {/* basket icon with banner */}
            </nav>
        </>

    )
}

export default Header
