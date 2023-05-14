import React, { useState } from 'react';

//Crea una lista de elementos que se puedan agregar a travez de un formulario
function ListaElementos() {
  const [elementos, setElementos] = useState([]);
  const [agregarElemento, setAgregarElemento] = useState('');

  const Submit = (event) => {
    event.preventDefault();
      setElementos([...elementos, agregarElemento]);
      setAgregarElemento('');
  };

  const cambio = (event) => {
    setAgregarElemento(event.target.value);
  };

  return (
    <div className='text-center'>
        <h3>Crea una lista de elementos que se puedan agregar a través de un Formulario</h3>
      <form onSubmit={Submit}>
        
        <input className='form-control mb-3'
          type="text"
          placeholder="Escriba aqui"
          value={agregarElemento}
          onChange={cambio}
          required
        />
        <button className='btn btn-primary' type="submit">Agregar</button>
        
        
      </form>
      <div>
        {elementos.map((elemento, index) => (<li  key={index}>{elemento} </li> ))}
    </div>
    </div>
  );
}

export default ListaElementos;