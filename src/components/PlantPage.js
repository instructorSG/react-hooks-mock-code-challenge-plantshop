import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plantList, setPlantList ] = useState([])
  const [ searchPlant, setSearchPlant ] = useState('')

  const baseURL = 'http://localhost:6001/plants'

  useEffect(() => {
    fetch(baseURL)
    .then(data => data.json())
    .then(
      plants => setPlantList(plants)
    )
  }, [])

  const addPlant = (newPlant) => {
    const newPlantList = [...plantList, newPlant ]
    setPlantList(newPlantList)
  }

  const filteredList = plantList.filter((plant) => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={ addPlant } baseURL={ baseURL } />
      <Search searchPlant={ searchPlant } onSearchChange={ setSearchPlant } />
      <PlantList plantList={ filteredList } />
    </main>
  );

}

export default PlantPage;
