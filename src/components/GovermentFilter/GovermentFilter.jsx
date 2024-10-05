import React, { useEffect, useRef, useState } from 'react';
import DownArrow from '../../static/icons/down-arrow.svg';
import './govermentFilter.css';

function GovermentFilter({title,options}) {

    const selectOptions = useRef();
    const [option, setOption] = useState(options[0]);

    const handleSelectBoxClick = () => {
        selectOptions.current.style.display = selectOptions.current.style.display === "block" ? "none" : "block";
    }

    const handleOptionClick = (e) => {
        setOption(e.target.innerHTML);
        selectOptions.current.style.display = 'none';
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.id !== 'filter') {
                selectOptions.current.style.display = 'none';
            }
        })
    })

    return (
        <div className="goverment-filter" >
            <div className="title">
                {title}
            </div>

            <div className="custom-selectbox">
                <div className="header" onClick={handleSelectBoxClick} id='filter'>
                    {option}
                    <img src={DownArrow} alt="" />
                </div>

                <div className="options" ref={selectOptions}>
                    {
                        options.map((el)=>(
                            <div key={el} className="option" onClick={handleOptionClick}>{el}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GovermentFilter