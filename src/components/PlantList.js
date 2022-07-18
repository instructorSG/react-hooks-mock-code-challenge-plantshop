import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {

  const plantCards = plantList.map((plant) =>
    <PlantCard key={plant.id} plant={ plant } />
  )

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
