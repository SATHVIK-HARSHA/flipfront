import React, { useState, useEffect } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const NavBar = ({ size, setShow }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    function fetchproduct() {
      axios
        .get(`http://localhost:5000/items`)
        .then((res) => {
          console.log(res);
          setItems(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchproduct();
  }, []);

  console.log(items);
  const a = [];
  {
    a.push(
      items
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <img src={item.url} />
              <p>{item.name}</p>
            </div>
          );
        })
    );
    console.log("FILTERED LIST ", a);
    // localStorage.setItem("products",a)
  }

  const filterDispatch = useDispatch();

  const handleSearchChange = (event) => {
    filterDispatch({
      type: "SEARCH",
      payload: event.target.value,
    });
  };

  return (
    <div className="top">
      <div className="logo" onClick={() => setShow(true)}>
        <Link to="/">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png "
            width="75px"
            height="20px"
          ></img>
          <p>
            Explore <span className="plus-color">plus</span>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              width="10px"
              height="10px"
            ></img>
          </p>
        </Link>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search for products"
          onChange={(event) => {
            handleSearchChange(event);
          }}
        />
      </div>

      <div className="searchContainer">{/* {a} */}</div>

      <button className="loginbtn" type="submit" value="submit">
        Login
      </button>
      <a href="#" className="navlink">
        Become a Seller
      </a>
      <a href="#" className="navlink">
        More
      </a>
      <div className="cart" onClick={() => setShow(false)}>
        <span>
          <Link to="/cartPage">
            <i className="fas fa-cart-plus" />
          </Link>
        </span>
        <span>{}</span>
      </div>
    </div>
  );
};

export default NavBar;
