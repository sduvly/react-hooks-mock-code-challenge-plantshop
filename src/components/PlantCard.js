import React from "react";

function PlantCard({image, name, price, IsStock, setIsStock}) {
  function onSwitch(e){
    setIsStock(IsStock => !IsStock)
  console.log(e)
  }
 
  return (
    <li onClick={onSwitch} className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
  
      {IsStock ? (
        <button  className="primary">In Stock</button>
      ) : (
        <button >Out of Stock</button>
      )}
   
    </li>
  );
}

export default PlantCard;
