import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from './Pagination';

const ItemList=({handleClick})=> {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const [itemsPerPage] = useState(10);
  const [searchTerm,setSearchTerm]=useState("");

  const[page,setPage]=useState(1);
  
  useEffect(() => {
    function fetchproduct(){
    // setLoading(true);
    axios.get(`http://localhost:5000/items/?page=${page}`)
      .then(res =>{
        console.log(res);
        setItems(res.data);
        // setLoading(false);
      })
      .catch(err => console.log(err));
    }
    fetchproduct();
    // if(localStorage.getItem("products")!==null)
    //   setItems(localStorage.getItem("products"))
  }, [page]);

  const indexOfLastItem=currentPage*itemsPerPage;
  const indexOfFirstItem=indexOfLastItem-itemsPerPage;
  const currentItems=items.slice(indexOfFirstItem,indexOfLastItem);

  const paginate=pageNumber=>setPage(pageNumber);

//console.log()
console.log("all items",items)
                 

  return (
    <div className='block-right'>
        <div className="grid-container">
        {currentItems.map(item => (
        <div className="grid-item">
        <img src={item.url} className='change'/>
        <p>{item.name}</p>
        <p><strong>&#8377; {item.price} </strong></p>
        <button onClick={()=>handleClick(item)}>Add to cart</button>
        </div>
        ))}
      </div>

       {/* <div className='searchContainer'>
        {a}
            </div> */}

      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
    </div>
  );
}

export default ItemList;