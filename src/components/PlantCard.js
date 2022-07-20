import React, {useState} from "react";

function PlantCard({ plant, removePlant, changePrice }) {
  const [ inStock, setInStock ] = useState(true)
  const [ newPrice, setNewPrice ] = useState("")

  const { id, name, image, price } = plant

  const toggleHandler = () => {
    setInStock((inStock) => !inStock)
  }

  const deletePlant = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method : "DELETE"
    })
    .then((r)=>r.json())
    .then(removePlant(plant))
  }

  const submitPriceChangeHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ ...plant, price: newPrice }),
    })
    .then(resp=>resp.json())
      .then(changePrice(plant, newPrice))
    .then(setNewPrice(''))
  }


  return (
    <li className="card"  >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p >Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleHandler}>In Stock</button>
      ) : (
        <button onClick={toggleHandler}>Out of Stock</button>
      ) }
      <button onClick={ deletePlant }>Delete</button>
      <form onSubmit={submitPriceChangeHandler}>
        <input placeholder="New Price..."
          type="number" step="0.01"
          id="price"
          onChange={(e) =>setNewPrice(e.target.value)}
          // onChange={(e) =>setNewPrice(parseInt(e.target.value,10))}
          value={newPrice } />

        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
