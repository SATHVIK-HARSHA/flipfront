import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./Item";

const CartPage = ({ handleClick }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  // const [savelater, setSaveLater] = useState([]);
  const [saveforlater, setSaveforLater] = useState([]);

  console.log("Cart");

  const handleAddagain = (item) => {
    handleClick(item);
    axios
      .get(`http://10.120.21.82:5000/orders`)
      .then((res) => {
        console.log(res);
        setCart(res.data);
      })

      .catch((err) => console.log(err));

    console.log(item);
    handleRemoveFromSaveLater(item._id);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    // console.log("Logged elemtent", item, cart)
    // setCart(item);
    // if (abc = 'inc') {
    //   console.log(item.amount)
    // }
    // console.log(item)
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  // const res = axios.get('http://localhost:5000/getCart')
  // .then((res) => {
  //     var orders = res.data
  // })
  // .catch((err) => console.log(err))
  useEffect(() => {
    axios
      .get(`http://10.120.21.82:5000/orders`)
      .then((res) => {
        console.log("res", res);
        setCart(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    function fetchsave() {
      axios
        .get(`http://10.120.21.82:5000/savelaters`)
        .then((res) => {
          console.log(res);
          setSaveforLater(res.data);
        })

        .catch((err) => console.log(err));
    }
    fetchsave();
  }, []);

  console.log(saveforlater);

  const handleSave = (item) => {
    //if (savelater.indexOf(item) !== -1) return;
    setSaveforLater([...saveforlater, item]);
    // console.log(saveforlater);

    axios
      .post(`http://10.120.21.82:5000/savelaters`, item)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.error(err);
      });

    console.log(item);

    handleRemove(item._id);
    axios.get(`http://10.120.21.82:5000/savelaters`).then((res) => {
      console.log(res);
      setSaveforLater(res.data);
    });
    handlePrice();
  };

  const handleRemove = (id) => {
    const ar = cart.filter((items) => items._id !== id);
    axios.delete(`http://10.120.21.82:5000/orders/${id}`).then((res) => {
      console.log(ar);
    });
    setCart(ar);
    handlePrice();
  };

  const handleRemoveFromSaveLater = (id) => {
    const ar = saveforlater.filter((item) => item._id !== id);

    axios.delete(`http://10.120.21.82:5000/save/${id}`).then((res) => {
      //const arr = cart.filter((product) => product.id !== id);
      console.log(ar);
    });
    setSaveforLater(ar);
    handlePrice();
  };

  const handleSave1 = (item) => {
    //if (saveforlater.indexOf(item) !== -1) return;
    // setSaveforLater([...saveforlater, product]);
    // console.log(saveforlater);

    axios
      .post(`http://10.120.21.82:5000/savelaters`, item)
      .then(function (res) {
        console.log(res.data);
        setSaveforLater([...saveforlater, item]);
      })
      .catch(function (err) {
        console.error(err);
      });

    console.log(saveforlater);
    // setSaveforLater(res.data);

    handleRemove(item._id);
    axios.get(`http://10.120.21.82:5000/savelaters`).then((res) => {
      console.log(res);
      setSaveforLater(res.data);
    });
    handlePrice();
  };

  const a = [];
  cart.map((item) => {
    // console.log("ele",ele);
    a.push(
      <div className="cart_box" key={item.id}>
        <div className="cart_img">
          <img src={item.url} />
          <p>{item.name}</p>
        </div>
        <div className="inc-dec">
          <button onClick={() => handleChange(item, 1)}>+</button>
          <button>{item.amount}</button>
          <button onClick={() => handleChange(item, -1)}>-</button>
        </div>
        <div className="remove">
          <span>Price-{item.price}</span>
          <button onClick={() => handleRemove(item._id)}>Remove</button>
          <button onClick={() => handleSave1(item)}>Save for later</button>
        </div>
      </div>
    );
  });

  const b = [];
  {
    saveforlater.map((item) => {
      b.push(
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.url} alt="" />
            <p>{item.name}</p>
          </div>

          <div>
            <button onClick={() => handleAddagain(item)}>Add to cart</button>
          </div>
        </div>
      );
    });
  }
  //console.log(`{savelater}`)
  return (
    <nav>
      <h1>My cart({cart.length})</h1>
      {a}

      {/* {cart.map((item) =>{
            <div className='cart_box' key={item.id}>

             <div className='cart_img'>
                  <img src={item.url}/>
                  <p>{item.name}</p>
             </div>

             <div className='inc-dec'>
                <button onClick={()=>handleChange(item,+1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={()=>handleChange(item,-1)}>-</button>
             </div>

             <div className='remove'>
                    <span> Total cost:{item.price*item.amount}</span>
                    <button onClick={()=>handleRemove(item._id)}>remove</button>
                    <button onClick={() => handleSave(item)}>Save later</button>
             </div>

           </div> */}
      {/* })} */}

      <h1>Save Later</h1>

      {b}

      <div className="total">Subtotal -{price}</div>
    </nav>
  );
};

export default CartPage;

// ............................&&&&&&/........

// import React, { useState, useEffect } from "react";
// //import './cart.css';
// //import ProductCard from './prdcard';
// import ItemList from "./Item";
// //import {hosturl} from '../host/hosturl';
// import axios from "axios";
// //import Cartprds from '../../../../backend/models/cart'
// //import Productdisplay from './productsdisplay';
// //import products from "../../../../backend/models/products";
// const Cart = ({ cart, setCart, handleClick }) =>{

//   useEffect(() => {

//     axios.get(`http://localhost:5000/orders`)
//       .then(res =>{
//         console.log(res);
//         setCart(res.data);
//     })

//       .catch(err => console.log(err));

//   }, []);

//     const [price, setPrice] = useState(0);
//     const [saveforlater, setSaveforLater] = useState([]);

//     useEffect(() => {
//       function fetchsave(){

//       axios.get(`http://localhost:5000/savelaters`)
//         .then(res =>{
//           console.log(res);
//           setSaveforLater(res.data);
//       })

//         .catch(err => console.log(err));
//     }
//       fetchsave()
//     }, []);

//     const handleChange = (item, d) =>{

//         const ind = cart.indexOf(item);
//     const arr = cart;
//     arr[ind].amount += d;

//     if (arr[ind].amount === 0) arr[ind].amount = 1;
//     setCart([...arr]);
//     // console.log("Logged elemtent", item, cart)
//     // setCart(item);
//     // if (abc = 'inc') {
//     //   console.log(item.amount)
//     // }
//     // console.log(item)
//     }

//   const handleSave = (item) => {
//     if (saveforlater.indexOf(item) !== -1) return;
//     // setSaveforLater([...saveforlater, product]);
//     // console.log(saveforlater);

//     axios.post(`http://localhost:5000/savelaters`, item)
//     .then(function(res) {
//       console.log(res.data);
//     })
//     .catch(function(err)  {
//       console.error(err);
//     });

//      console.log(item);

//     handleRemove(item._id);
//     axios.get(`http://localhost:5000/savelaters`)
//         .then(res =>{
//           console.log(res);
//           setSaveforLater(res.data);
//       })
//     handlePrice();
//   };

//     const handleRemove = (id) => {
//       const arr = cart.filter((item) => item._id !== id);
//       axios.delete(`http://localhost:5000/orders/${id}`)
//       .then(res => {

//          //const arr = cart.filter((product) => product.id !== id);
//          console.log(arr);

//       //setCart(arr);

//       })

//     //   const arr = cart.filter((product) => product.id !== id);

//       setCart(arr);
//       handlePrice();
//     };

//     const handleRemoveFromSaveLater = (id) => {
//         const arr = saveforlater.filter((item) => item._id !== id);

//         axios.delete(`http://localhost:5000/save/${id}`)
//       .then(res => {

//          //const arr = cart.filter((product) => product.id !== id);
//          console.log(arr);

//       })
//         setSaveforLater(arr);
//         handlePrice();
//       };

//     const handleAddagain = (item) =>{

//         handleClick(item);
//         axios.get(`http://localhost:5000/orders`)
//         .then(res =>{
//           console.log(res);
//           setCart(res.data);
//       })

//         .catch(err => console.log(err));

//         // console.log(product);
//         handleRemoveFromSaveLater(item._id);

//     };

//     const handlePrice = () => {
//       let ans = 0;
//       cart.map((item) => (ans +=  item.amount * item.price));
//       setPrice(ans);
//     };

//     useEffect(() => {
//       handlePrice();
//     });

//   return (
//     <div>

//         <div className="total">
//         <h1  >My Cart </h1>
//         <h3>Total amount {price}</h3>

//       </div>
//          {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.url} alt="" />
//             <p>{item.name} <br/>Cost: {item.price}</p>

//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//           <span>Total cost: {item.price * item.amount}</span>
//             <button onClick={() => handleRemove(item._id)}>Remove</button>
//             <button onClick={() => handleSave(item)}>Save for later</button>
//           </div>
//         </div>
//       ))}

//       <h1>Save for later </h1>

//          {saveforlater.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.url} alt="" />
//             <p>{item.name}</p>

//           </div>

//           <div>
//             <button onClick={() => handleAddagain(item)}>Add to cart</button>
//           </div>
//           </div>
//          ))}

//     </div>
//   )
// }

// export default Cart;
