import { useDispatch, useSelector } from 'react-redux';

export const Type=()=>{
    const {type} = useSelector(filterState=>filterState.filter)
    const filterDispatch = useDispatch();

    const handleTypeChange=(e, option)=>{
        const check = e.target.checked
        filterDispatch({
            type: "TYPE",
            payload: {option, check}
        })
    }

    return (
        <div className="category">
            <div className="category-title">Type</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleTypeChange(e, "Analog")} checked={type.includes("Analog")}/>
                    <span>Analog</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleTypeChange(e, "Digital")} checked={type.includes("Digital")}/>
                    <span>Digital</span>
                </label>
            </div>
        </div>
    )
}