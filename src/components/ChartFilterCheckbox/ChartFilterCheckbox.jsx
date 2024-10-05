import { useEffect, useRef } from 'react';
import FilterImage from '../../static/icons/statistics-filter.svg';
import './chartFilterCheckbox.css';

function ChartFilterCheckbox({filter, setFilter, options}) {

    const handleClick = (e) =>{

        const checkboxList = e.target.parentElement.parentElement.children[1];

        if (checkboxList.style.display === 'none' || checkboxList.style.display === '') {
            checkboxList.style.display = 'block';
        } else {
            checkboxList.style.display = 'none';
        }

    }

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        
        if(isChecked){

            filter.includes("all") ? setFilter((el)=>([e.target.value])) : setFilter((vals)=>([...vals,e.target.value]));
            
        }else{
            
            filter.length > 1 ? setFilter((vals)=>(vals.filter((item)=>(item!==e.target.value)))):setFilter(["all"]);
        }

    }

    const selectOptions = useRef();


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.id !== 'filterButton') {
                selectOptions.current.style.display = 'none';
            }
        })
    })

    return (
        <div className="chart-filter">
            
            <div className="filter-container">

                <div className="filter-button">
                    <button id="filterButton" onClick={handleClick}>Tous</button>
                    <img src={FilterImage} alt=""/>
                </div>

                <div id="checkboxList" className="checkbox-list" ref={selectOptions}>
                    {
                        options.map((item, index)=>(
                            <label key={index}><input type="checkbox" value={item} onChange={handleChange}/>{item}</label>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default ChartFilterCheckbox;