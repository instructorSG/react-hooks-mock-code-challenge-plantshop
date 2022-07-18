import React, {useState} from "react";

function NewPlantForm({ addPlant, baseURL }) {

  const initialState = {
    name: '',
    image: '',
    price: 0
  }
  const [ addedPlant, setAddedPlant ] = useState(initialState)

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accepts': 'application/json'

      },
      body: JSON.stringify(addedPlant)
    })
        .then((resp) => resp.json())
        .then(newPlant => addPlant(newPlant))
      setAddedPlant(initialState)
    }

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddedPlant((prevAddedPlant) => ({ ...prevAddedPlant, [ name ]: value }))
     }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input onChange={handleChange} value={ addedPlant.name }    type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={ addedPlant.image } type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={ addedPlant.price } type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
