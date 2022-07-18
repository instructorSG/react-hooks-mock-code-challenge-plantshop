import React, {useState} from "react";

function PlantCard({ plant }) {
  const [ inStock, setInStock ] = useState(true)

  const clickHandler = () => {
    setInStock((inStock)=>!inStock)
  }
    return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={clickHandler}>In Stock</button>
      ) : (
        <button onClick={clickHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
