import React from 'react'
import './Electronics.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

function Electronics({ categroy, itself, menu_list,handleMenu }) {
    const closeElectronics = () => {
        itself.classList.remove('ele-moveLeft');
        categroy.classList.remove('ele-moveLeft');
        setTimeout(() => {
            menu_list.classList.remove('scroll-switchOff');
        }, 300)
    };
    
    return (
        <div className="electronics-list ">
            <li onClick={closeElectronics} className="main-menu"><ArrowBackIcon className="menu-arrowBackIcon" /> Main Menu</li>
            <li>ELECTRONICS</li>
            <li>All Electronics</li>
            <li><Link onClick={handleMenu} to="/search/Controller">Controller</Link></li>
            <li><Link onClick={handleMenu} to="/search/Monitor">Monitor</Link></li>
            <li><Link onClick={handleMenu} to="/search/Watch">Watch</Link></li>
            <li>Headphones</li>
            <li>Televisions</li>
            <li>Mobile Phones & Accessories</li>
            <li>PC & Video Games</li>
            <li>Smart Home</li>
            <li>Wearable Technology</li>
            <li>GPS, Navigation & Accessories</li>
            <li>Amazon Renewed</li>
        </div>
    )
}

export default Electronics
