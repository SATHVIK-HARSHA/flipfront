import React from 'react'
import '../css/style.css'

function Junk() {

//have a state called items[] 
// const [items,setItems]=useState([])
// useEffect(()=>{},[])  //
//items.map((item)=> return (<ITEMCOMPONENT />))

  return (
    <div class='block-right'>
        <div class="grid-container">

            <div class="grid-item">
            <img src='https://rukminim1.flixcart.com/image/612/612/l05lx8w0/watch/w/k/t/-original-imagcy8hkbshxtha.jpeg?q=70 ' class='change'/>
            <p>Fossil </p>
            <p>FLYNN analog watch</p>
            <button type='submit' value='submit'>Add to cart</button>
            </div>

            <div class="grid-item">
                <img src='https://rukminim1.flixcart.com/image/832/832/ku79vgw0/watch/a/g/j/ch2601-fossil-men-original-imaff62hurpdhhha.jpeg?q=70' class='change'/>
                <p>Fossil </p>
                <p>DECKER Analog Watch</p>
                <button type='submit' value='submit'>Add to cart</button>
            </div>

            <div class="grid-item">
                <img src='https://rukminim1.flixcart.com/image/832/832/kwmfqfk0/watch/s/k/3/1-dz4530-diesel-men-original-imag998fgm4akhhd.jpeg?q=70' class='change'/>
                <p>Diesel </p>
                <p>Griffled Analog Watch</p>
                <button type='submit' value='submit'>Add to cart</button>
            </div>

            <div class="grid-item">
                <img src='https://rukminim1.flixcart.com/image/832/832/k4rcmfk0pkrrdj/watch-refurbished/g/g/m/c-ng38003pp05c-fastrack-original-imaf9fb3xymwzh3f.jpeg?q=70' class='change'/>
                <p>Fastrack </p>
                <p> Analog Watch</p>
                <button type='submit' value='submit'>Add to cart</button>
            </div>

            <div class="grid-item">
                <img src='https://rukminim1.flixcart.com/image/832/832/k4rcmfk0pkrrdj/watch-refurbished/f/6/n/c-1771sm03-titan-original-imaf9fbc94dgj7zz.jpeg?q=70' class='change'/>
                <p>Titan </p>
                <p>Analog Watch</p>
                <button type='submit' value='submit'>Add to cart</button>
            </div>

            <div class="grid-item">

            </div>

            <div class="grid-item">

            </div>

            <div class="grid-item">

            </div>
        </div>
    </div>
  )
}

export default Junk;