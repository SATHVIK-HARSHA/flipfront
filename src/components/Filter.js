import React from 'react'

function Filter() {
  return (
    <div class='block-left'>
        <h3> Filter</h3>
        <br/> 
        <label>Gender:</label><br/>

        <input type="checkbox" id="Gender" name="Gender" value="Men"/> &nbsp;
        <label for="Gender">Men</label> 

        <input type="checkbox" id="Gender" name="Gender" value="Women"/> &nbsp;
        <label for="Gender">Women</label><br/><br/>

        <label>Brand:</label><br/>
        <div class='adjust'>

        <input type="checkbox" id="Brand" name="Brand" value="Fossil"/> &nbsp;
        <label for="Brand">Fossil</label> &nbsp;

        <input type="checkbox" id="Brand" name="Brand" value="Diesel"/> &nbsp;
        <label for="Brand">Diesel</label> &nbsp;

        <input type="checkbox" id="Brand" name="Brand" value="Fastrack"/> &nbsp;
        <label for="Brand">Fastrack</label> &nbsp;
        
        <input type="checkbox" id="Brand" name="Brand" value="Titan"/> &nbsp;
        <label for="Brand">Titan</label> <br/> <br/>

        </div>
        <label>Type:</label><br/>

        <input type="checkbox" id="Type" name="Type" value="Analog"/> &nbsp;
        <label for="Type">Analog</label>

        <input type="checkbox" id="Type" name="Type" value="Digital"/> &nbsp;
        <label for="Type">Digital</label> <br/> <br/>

        <button>Clear Filters</button>
    </div>
  )
}

export default Filter