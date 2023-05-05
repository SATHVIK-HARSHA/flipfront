// import './App.css';
import axios from "axios";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Homepage from "./components/Homepage";
import Item from "./components/Item";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    // console.log("items",item);
    {
      alert("Item has been added to cart");
    }
    if (cart.indexOf(item) !== -1) return;

    axios
      .post("http://10.120.21.82:5000/orders", item)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(item);
  };

  // let ind = -1;
  // cart.forEach((data, index)=>{
  // 	if (data._id === item._id)
  // 		ind = index;
  // });
  // // const ind=cart.indexOf(item);
  // const tempArr = cart;
  // tempArr[ind].amount += d;

  // if (tempArr[ind].amount === 0)
  // 	tempArr[ind].amount = 1;
  // setCart([...tempArr])
  // // console.log(item,d);

  // const a = item.amount;
  // console.log(a);
  // console.log(item)
  // console.log(cart);
  // // axios.get(`http://localhost:5000/orders`)
  // //         .then(res =>{
  // //           console.log(res);
  // //           setCart(res.data);
  // //         })

  //     const ind = cart.indexOf({item});
  //     console.log(ind);
  //     const arr = cart;
  //     console.log(arr);
  //     arr[ind].amount += d;

  //     if (arr[ind].amount === 0) arr[ind].amount = 1;
  //     setCart([...arr]);

  return (
    <div className="App">
      <NavBar size={cart.length} setShow={setShow} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Homepage handleClick={handleClick} />}
        />
        <Route
          exact
          path="/cartPage"
          element={<CartPage handleClick={handleClick} />}
        />
      </Routes>
    </div>
  );
};

export default App;
