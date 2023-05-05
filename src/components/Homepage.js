import React from 'react'
// import Filter from './Filter'
import ItemList from './Item'
import Junk from './junk'
import { Filter } from './Filter/Filter';

const Homepage=({handleClick})=> {
  return (
    <div class='block'>
        {/* <Filter/> */}
        <Filter/>
        <ItemList handleClick={handleClick}/>
        {/* <Junk/> */}
    </div>   
  )
}

export default Homepage