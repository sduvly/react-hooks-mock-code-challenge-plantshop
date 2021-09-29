import {useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [isplants, setIsplants] = useState([]);

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then(plant => setIsplants(plant))

},[] )
  
  return (
    <div className="app">
      <Header />
      <PlantPage isplants={isplants}/>
    </div>
  );
}

export default App;
