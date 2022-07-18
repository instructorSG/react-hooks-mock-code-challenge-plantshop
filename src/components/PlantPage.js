import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ newPlant, setNewPlant ] = useState({})
  const [ plantList, setPlantList ] = useState([])
  const [ SearchPlant, setSearchPlant ] = useState('')

  const baseURL = 'http://localhost:6001/plants'

  useEffect(() => {
    fetch(baseURL)
    .then(data => data.json())
    .then(
      plants => setPlantList(plants)
    )
  }, [])


  const addPlant = (newPlant) => {
    const newPlantList = [ newPlant, ...plantList ]
    setPlantList(newPlantList)
  }

    return (
      <main>
        <NewPlantForm addPlant={ addPlant } baseURL={ baseURL } />
        <Search />
        <PlantList plantList={ plantList } />
      </main>
    );

}

export default PlantPage;
