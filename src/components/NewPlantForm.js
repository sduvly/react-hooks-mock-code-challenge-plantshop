import React from "react";

function NewPlantForm({form, setform}) {

  function formhandle(e){
  console.log(e.target.value)
  setform({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    fetch(" http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(update => setform(update))
  }

  return (
    <div onSubmit={handleSubmit}className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={formhandle}
        value={form.name}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={formhandle}
        value={form.image}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={formhandle}
        value={form.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
