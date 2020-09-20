import React, { useState, useEffect } from 'react'
import logo from './images/amazon_PNG11.png'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import HeaderLink from './HeaderLink';
import Checkout from './Checkout'
import { useStateValue } from '../../data/StateProvider'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu/Menu'
import { auth } from '../../firebase'





function Header({handleClick}) {
    const [{ basket, user, search, data }, dispatch] = useStateValue();
    const [searchInput, setSearchInput] = useState("")
    // const [newArry, setNewArry] = useState([]);
    useEffect(() => {
        // console.log(newArry)
        console.log(data)
    }, [ data])
    const login = () => {
        if (user) {
            window.confirm("Do you want to Sign out?") && auth.signOut();
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
    // const handleClick = () => {
    //     if (searchInput === "") { alert("please enter the product name to search") }
    //     else {
    //         data.forEach(item => item.title.includes(searchInput) && setNewArry(preState => [...preState, item]))
    //         dispatch({
    //             type: "SET_DATA",
    //             data: newArry,
    //         })
    //         setSearchInput('')
    //     }
    // };
    const doit = () => {
        handleClick(searchInput,setSearchInput);
    };
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
                    <input type="text" className="header_searchInput" placeholder={search} value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                    <SearchIcon className="header_searchIcon" onClick={doit} />
                </div>

                <div className="header_nav">
                    <HeaderLink path={!user && "/login"} span1={user ? `Hello ${user?.email}` : "Hello Guest"} span2={user ? "Sign out" : "Sign in"} click={login} />
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
