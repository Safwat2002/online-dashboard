import React from "react";


import { DateFilter, Diagramme, FileTable, Filtre, GovermentFilter, Navbar, SelectBox, Sidebar, Widget } from '../../components/';
import ClockIcon from '../../static/icons/clock-icon.png';
import LeftArrow from '../../static/icons/left-arrow.svg';
import RightArrow from '../../static/icons/right-arrow.svg';
import UserIcon from '../../static/icons/user-icon.png';
import ProjectImage from "../../static/imgs/project-img.png";
import './home.css';

function Home() {

    return (
        <div className="home-page">
            <Sidebar />

            <div className="home-content">
                <Navbar />

                <div className="content">

                    {/* <div>{`${process.env.REACT_APP_APP_URL}digi-sign/`}</div> */}
                    <div className="top">
                        <div className="buttons">
                            <button className="btn"><img src={LeftArrow} alt="" /></button>
                            <button className="btn"><img src={RightArrow} alt="" /></button>
                        </div>

                        <SelectBox
                            options={["Le dernier jours", "La dernière semaine", "Les 30 derniers jours", "Les 90 derniers jours"]}
                            selectedIndex={2}
                            id={"filter"}
                        />
                    </div>

                    <div className="widgets">
                        <Widget image={ProjectImage} title={"Projet"} top={"95"} bottom={"100"} description={"10% Augmentation par rapport au mois dernier"} upOrDown={"up"} color={"#7524AF"} />
                        <Widget image={ClockIcon} title={"Temps passé"} top={"999"} bottom={"1200 heures"} description={"8% Diminution par rapport au mois dernier"} upOrDown={"down"} color={"#3266C8"} />
                        <Widget image={UserIcon} title={"Ressources"} top={"101"} bottom={"120 heures"} description={"12% Diminution par rapport au mois dernier"} upOrDown={"up"} color={"#FF8700"} />
                    </div>

                    <div className="filters">
                        <GovermentFilter title={"Gouverneret"} options={["Tunis", "Algeria", "Morroco", "Egypt", "Libya"]} />
                        <GovermentFilter title={"Type de fichier"} options={["Tunis", "Algeria", "Morroco", "Egypt", "Libya"]} />
                        <DateFilter title={'Date début'} />
                        <DateFilter title={'Date fin'} />
                    </div>

                    <div className="charts">
                        <Diagramme />
                        <Filtre />
                        <Filtre />
                    </div>
                    
                    <div className="files">
                        <FileTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;