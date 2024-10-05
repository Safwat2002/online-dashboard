import React from "react";
import Icon1 from '../../static/icons/Icon1.svg';
import Icon2 from '../../static/icons/Icon2.svg';
import Icon3 from '../../static/icons/Icon3.png';
import Icon4 from '../../static/icons/Icon4.svg';
import Icon5 from '../../static/icons/Icon5.png';
import Icon6 from '../../static/icons/Icon6.png';

import DashboardImage from '../../static/icons/vuesax-linear-category-2.png';
import Logo from '../../static/imgs/logo-bns-blanc-1.png';
import './sidebar.css';

function Sidebar() {

    const handleMouseOver = (e) => {
        e.target.classList.add('active-link');
        let siblings = e.target.parentElement.children;

        for(let i = 0; i < siblings.length; i++) {
            if(siblings[i] !== e.target) {
                siblings[i].classList.remove('active-link');
            }
        }
    }

    const handleMouseOut = (e) => {
        e.target.classList.remove('active-link');
    }

    const handleLeaveLinks = (e) => {
        document.getElementsByClassName('single-link')[0].classList.add('active-link');
    }


    return (
        <div className="sidebar">

            <div className="logo">
                <img src={Logo} alt="LOGO" />
            </div>

            <div className="pages-links">

                <div className="top">
                    <img src={DashboardImage} alt="Dash" />
                    Dashboard
                </div>

                <div className="middle" onMouseOut={handleLeaveLinks}>

                    <div className="single-link active-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img src={Icon1} alt="" />
                        Gestion des fichiers
                    </div>
                    <div className="single-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img src={Icon2} alt="" />
                        Gestion des utilisateurs
                    </div>
                    <div className="single-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img src={Icon3} alt="" />
                        Gestion des certificatss
                    </div>
                    <div className="single-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img src={Icon4} alt="" />
                        Sauvegarder un ficher
                    </div>
                    <div className="single-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img src={Icon5} alt="" />
                        Paramètres
                    </div>
                </div>

                <div className="bottom single-link">
                    <img src={Icon6} alt="" />
                    Déconnecter
                </div>
            </div>
        </div>
    );
}

export default Sidebar;