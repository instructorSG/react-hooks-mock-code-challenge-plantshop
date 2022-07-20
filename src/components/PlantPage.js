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


  // const modifyPlant = () => { console.log('modify plant') }

const changePrice = (plant, newPrice) => {
    console.log('in change price')
  console.log('newPrice plant', plant)
  const newPlantList = plantList.map((p) => p.id === plant.id ? { ...plant, price: newPrice } : p)
  setPlantList(newPlantList)
  }

  const removePlant = (plant) => {
    console.log('plant to be removed', plant.name)
    const newPlantList = plantList.filter(p => p.id !== plant.id)
    setPlantList(newPlantList)
  }

  const filteredList = plantList.filter((plant) => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={ addPlant } baseURL={ baseURL } />
      <Search searchPlant={ searchPlant } onSearchChange={ setSearchPlant } />
      <PlantList plantList={ filteredList } removePlant={ removePlant } changePrice={ changePrice } />
    </main>
  );

}

export default PlantPage;
