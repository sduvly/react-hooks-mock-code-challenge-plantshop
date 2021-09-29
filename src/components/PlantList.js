//import React from "react";
import { useState } from "react";
import PlantCard from "./PlantCard";


function PlantList({filtplants}) {
  const [IsStock, setIsStock] =useState(true)
  return (
    <ul className="cards">
          {filtplants.map(p => <PlantCard key={p.id} name={p.name} image={p.image} price={p.price} IsStock={IsStock} setIsStock={setIsStock}/>)}
      </ul>
  );
}

export default PlantList;
