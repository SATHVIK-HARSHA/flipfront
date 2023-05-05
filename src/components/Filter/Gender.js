import { useSelector, useDispatch } from 'react-redux';

export const Gender=()=>{
    const {gender} = useSelector(filterState=>filterState.filter)
    const filterDispatch = useDispatch();

      const handleGenderChange = (option) => {
        filterDispatch({
            type: "Gender",
            payload: option
        })
      }

    return (
        <div className="category">
            <div className="category-title">Gender</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
            <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio"  onChange={() => handleGenderChange("all")} value="all" checked={gender=== "all"}/>
                    <span>All</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio"  onChange={() => handleGenderChange("Men")} value="Men" checked={gender=== "Men"}/>
                    <span>Men</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio"  onChange={() => handleGenderChange("Women")} value="Women" checked={gender=== "Women"}/>
                    <span>Women</span>
                </label>
                
            </div>
        </div>
    )


}