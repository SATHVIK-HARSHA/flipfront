import React from 'react'


export const Pagination = ({itemsPerPage,totalItems,paginate}) => {
    // const pageNumbers=[];

    // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //     pageNumbers.push(i);
    //}
 //console.log(paginate(2));
  return (
    <div>
        {/* <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='pagination'>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul> */}
<ul className='pagination'>
      <li><button onClick={()=>paginate(1)}className='pagination'>1</button></li>
     
      <li><button onClick={()=>paginate(2)}className='pagination'>2</button></li>
      <li><button onClick={()=>paginate(3)}className='pagination'>3</button></li>

      </ul>
    </div>
  )
}
