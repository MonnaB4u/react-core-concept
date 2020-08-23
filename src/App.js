import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks=['Manna',' Riaz', 'Rubel', 'Jashim', 'Salman' ];
  const products =[

    {name : 'PhotoShop' , price: '$70'},
    {name : 'GTX 1050ti' , price: '$170'},
    {name : 'HP pavillion 15 Return' , price : '$1000'},
    {name : 'Aavast anti virus' , price : '$100'}
  
  ]
  return(
    <div className="App">
    <header className="App-header">
     
     <Counter></Counter>

      <ul>
          {
        nayoks.map(nayok => <li>{ nayok } </li>)
          }
          {
            products.map(product=> <li>{product.name} {product.price}</li>)
          }

      </ul>
       

      <Person name="Munna" Job="Pro programmer" intro="i will be very much comfortable to contact with you for solve your problem, if you have any problem about programming hire me"> </Person>
      <Person name="Asif" Job="Pro Programer" intro="i will be very much comfortable to contact with you for solve your problem, if you have any problem about programming hire me" src="F:\download/asif,jpg" ></Person>
      <Person img name="Sibaji" Job="Cricketer" intro="I am a crickerter If there have any crickt tournament in your area please hire me. i will never disappoint you"></Person>
      

    </header>
    </div>    
  );

}

function Counter(){
   
  let [count, setCount] =useState(10);
  const countButton= () => {

    const startCount=count+1;
    setCount(startCount);

  }

  return(

    <div>
      <h2>  Number is: {count}</h2>
      <button onClick={countButton}> Click here</button>
    </div>

  )

}


function Person(props){
    return(

     <div style={{
      //  border:"2px solid green",
       width: "1500px",
       margin:"20px",
       boxShadow: "1px 4px 10px 6px red"

       }}>
        <img src="{props.img}" alt=""/>
       <h3>My name: {props.name} </h3>
       <p> My Profession: {props.Job} </p>
       <p> {props.intro} </p>

     </div>



   )
}

export default App;
