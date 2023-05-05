import { Brand } from "./Brand";
import { Gender } from "./Gender";
import { Type } from "./Type";
import { useDispatch } from "react-redux";
import './utils/index';

export const Filter=()=>{
    const filterDispatch = useDispatch();

     const handleClearClick = () => {
        filterDispatch({
            type: "CLEAR"
        })
    }

    return (
        <div className="block-left">
    <div className="box">
        <aside className="filter-container">
            
            <div className="filter-container-title d-flex gap align-center wrap">
                <span>Filters</span><br/>
                
            </div>
            <div className="filters d-flex direction-column gap-10px">
                <br/><Brand/><br/>
                <Gender/> <br/>
                <Type/> <br/>
                
            </div>
            <div className="filter-container-title d-flex gap align-center wrap">
                
                <button className="button btn-link-primary cursor clear" onClick={handleClearClick}>Clear All</button>
            </div>
        </aside>
        </div>
        </div>
    )



}