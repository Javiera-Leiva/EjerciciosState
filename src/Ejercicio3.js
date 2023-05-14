import React, { useState } from 'react';


//Crea una aplicacion de tares donde se pueda agregar y eliminar.
function ListaTareas() {
  const [Tareas, setTareas] = useState([]);
  const [agregarTarea, setAgregarTarea] = useState('');

  const Submit = (event) => {
    event.preventDefault();
      setTareas([...Tareas, agregarTarea]);
      setAgregarTarea('');
  };

  const cambio = (event) => {
    setAgregarTarea(event.target.value);
  };
  const Eliminar = (index) => {
    const agregarTarea = [...Tareas];
    agregarTarea.splice(index, 1);
    setTareas(agregarTarea);
  };

  return (
    <div className='text-center'>
      <h3>Crea una lista de elementos que se puedan agregar a través de un formulario</h3>
      <h3>Crea una aplicación de tares donde se pueda agregar y eliminar.</h3>
      <form onSubmit={Submit}>
        
        <input className='form-control mb-3'
          type="text"
          placeholder="Escriba aqui sus tareas"
          value={agregarTarea}
          onChange={cambio}
          required
        />
        <button className='btn btn-primary' type="submit">Agregar</button>
        
        
      </form>
      <div>
        {Tareas.map((Tareas, index) => (<li  key={index}>{Tareas} 
            <button className="btn btn-outline-danger" onClick={() => Eliminar(index)}>Borrar</button>
        </li> ))}
        
    </div>
    </div>
  );
}

export default ListaTareas;