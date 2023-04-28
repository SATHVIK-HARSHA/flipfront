// import React, { useState,useEffect } from 'react'
// import axios from 'axios';

// const Cart = ({cart,setCart,handleChange}) => {
//     const [price,setPrice]=useState(0);

//     const handlePrice = ()=>{
//         let ans = 0;
//         cart.map((item)=>(
//             ans += item.amount * item.price
//         ))
//         setPrice(ans);
//     }

//     const handleRemove = (_id) =>{
//         const ar = cart.filter((item)=>item._id !==_id);
//         setCart(ar);
//         // handlePrice();
//     }

//     const handleBuyNow = () => {
//     axios.post('http://localhost:5000/orders', { items: cart })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//       console.log(cart)
//   };

//     useEffect(()=>{
//         handlePrice();
//     })

//     const arr=[];
//     cart?.map((item)=>{
//         arr.push(
//                 <div className='cart_box' key={item._id}>
//                     <div className='cart_img'>
//                         <img src={item.url}/>
//                         <p>{item.name}</p>
//                     </div>
//                     <div className='inc-dec'>
//                         <button onClick={()=>handleChange(item,+1)}>+</button>
//                         <button>{item.amount}</button>
//                         <button onClick={()=>handleChange(item,-1)}>-</button>
//                     </div>
//                     <div className='remove'>
//                         <span>{item.price}</span>
//                         <button onClick={()=>handleRemove(item._id)}>remove</button>
//                     </div>
//                 </div>
//         )
//     })
//   return (
//     <article>
//         {
//            arr 
//         }
//         <div>
//             <button onClick={handleBuyNow}>Buy Now</button>
//         </div>
//         <div className='total'>
//             Subtotal -{price}
//         </div>
//     </article>
//   )
// }

// export default Cart