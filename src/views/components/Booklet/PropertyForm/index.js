import React from 'react';

export default ({ formData, setAdress, handleSubmit }) => (
  <div className="container-paddings">
    <div>
      <input type="text" id="adress" onChange={event => setAdress(event.target.value)} />
      <label key="adress"> Prepoerty adress</label>
    </div>
    <div />
    <div />
    <div />
    <div>
      <input type="submit" onClick={handleSubmit} />
    </div>
    <h1>{formData.adress}</h1>
  </div>
);
