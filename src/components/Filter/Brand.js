import { useSelector, useDispatch } from 'react-redux';
import './utils/index';

export const Brand=()=>{
    const {brand} = useSelector(filterState=>filterState.filter)
    const filterDispatch = useDispatch();

    const handleBrandChange = (e, option) => {
        const check = e.target.checked
            filterDispatch({
                type: "BRAND",
                payload: {option, check}
            })
    }

    return (
          <div className="category">
            <div className="category-title">Brand</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Fossil" onChange={(e) => handleBrandChange(e, "Fossil")} checked={brand.includes("Fossil")}/>
                    <span>Fossil</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Diesel" onChange={(e) => handleBrandChange(e, "Diesel")} checked={brand.includes("Diesel")}/>
                    <span>Diesel</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Fastrack" onChange={(e) => handleBrandChange(e, "Fastrack")} checked={brand.includes("Fastrack")}/>
                    <span>Fastrack</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Titan" onChange={(e) => handleBrandChange(e, "Titan")} checked={brand.includes("Titan")}/>
                    <span>Titan</span>
                </label>
            </div>
         </div>
    )

}