import React from 'react'
import Filter from './Filter'
import ItemList from './Item'
import Junk from './junk'

const Homepage=({handleClick})=> {
  return (
    <div class='block'>
        <Filter/>
        <ItemList handleClick={handleClick}/>
        {/* <Junk/> */}
    </div>   
  )
}

export default Homepage