
import React from "react";
import ArrowButtom from "../../static/icons/arrow-bottom-right.png";
import ArrowTop from "../../static/icons/arrow-top-right.png";
import "./widget.css";

function Widget({ image, title, top, bottom, description, upOrDown, color }) {
    return (
        <div className="widget">
            <div className="icon" style={{backgroundColor:color}}>
                <img src={image} alt="" />
            </div>

            <div className="title">
                {title}
            </div>

            <div className="rating">
                <span className="topNum">{top} </span>
                <span className="buttomNum">/{bottom}</span>
            </div>

            <div className="description">
                <img src={upOrDown === "up" ? ArrowTop : ArrowButtom} alt="" />
                {description}
            </div>
        </div>
    );
}
export default Widget;