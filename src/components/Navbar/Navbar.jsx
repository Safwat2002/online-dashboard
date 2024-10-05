import React from "react";
import './navbar.css';

import MoreIcon from '../../static/icons/angle-icon.svg';
import NotificationIcon from '../../static/icons/notification-icon.png';
import SearchIcon from '../../static/icons/search-icon.png';
import DigiSignImage from '../../static/imgs/digi-sign.svg';
import UserImage from '../../static/imgs/user-image.png';


function Navbar(){
    return (
        <div className="navbar">
            
            <div className="container">
            <div className="logo">
                <img src={DigiSignImage} alt="" />
            </div>

            <div className="tools">
                <div className="search">
                    <img src={SearchIcon} alt="" />
                    <input type="text" placeholder="Recherche..." />
                </div>

                <div className="notification">
                    <img src={NotificationIcon} alt="" />
                    <div className="count">2</div>
                </div>

                <div className="user-info">
                    <div className="user-img">
                        <img src={UserImage} alt="" />
                    </div>

                    <div className="info">
                        <div className="name">RIAHI Amen Allah</div>
                        <div className="role">Admin</div>
                    </div>

                    <div className="more">
                        <img src={MoreIcon} alt="" />
                    </div>

                </div>

            </div>
            </div>

        </div>
    );
}

export default Navbar;