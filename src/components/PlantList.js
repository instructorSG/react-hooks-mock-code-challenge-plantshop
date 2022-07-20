import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, removePlant, changePrice }) {

  const plantCards = plantList.map((plant) =>

    <PlantCard
      changePrice={changePrice}
      removePlant = {removePlant}
      key={ plant.id }
      plant={ plant }
    />
  )

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
