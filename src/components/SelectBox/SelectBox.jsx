import './selectbox.css';

function SelectBox({options, selectedIndex, id}){
    return(
        <div className="select-box">
            <select name="filterPeriod" id={id} defaultValue={options[selectedIndex]}>
                    {
                        options.map((option, ind)=>(
                            <option key={option} value={option}>{option}</option>
                        ))
                    }
            </select>
        </div>
    );
}

export default SelectBox;