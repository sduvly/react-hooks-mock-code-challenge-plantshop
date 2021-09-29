import {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage({isplants}) {
  const [form, setform] = useState({
    name: '',
    image: '',
    price: ''
  })
   const [isSearch, setIsSearch] = useState('')
   const filtPlants = isplants.filter(p => p.name.toLowerCase().includes(isSearch))
   
  return (
    <main>
      <NewPlantForm form={form} setform={setform}/>
      <Search isSearch={isSearch} setIsSearch={setIsSearch}/>
      <PlantList isplants={isplants} filtplants={filtPlants}/>
  
    </main>
  );
}

export default PlantPage;
