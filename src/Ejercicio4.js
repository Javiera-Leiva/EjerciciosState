import React, { useState } from "react";

//Cree un formulario de cuatro campos que muestre el valor del campo cuando se envia el formulario.
function Formulario() {
    const [nombreproducto, setNombreProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [marca, setMarca] = useState("");
    const [cantidad, setCanidad] = useState("");
    const [verproducto, setProducto] = useState('');
    const [verprecio, setPrecioproducto] = useState('');
    const [vermarca, setMarcaProducto] = useState('');
    const [vercantidad, setCantidadProducto] = useState('');
  

  const Submit = (event) => {
    event.preventDefault();
    setProducto(`Producto: ${nombreproducto}`);
    setPrecioproducto(`Precio: ${precio}`);
    setMarcaProducto(`Marca: ${marca}`);       
    setCantidadProducto(`Cantidad: ${cantidad}`);
   
  };

  return (
      
   
    <div className='text-center'>

   <h3>Cree un formulario de cuatro campos que muestre el valor del campo cuando se envía el formulario.</h3>
      <form  onSubmit={Submit}>
        <label>Nombre del producto:
        <input 
          type="text"
          placeholder="Escriba aqui"
          value={nombreproducto}
          onChange={(event) => setNombreProducto(event.target.value)}
          required
        />
        </label>
        <label>Precio
        <input 
          type="number"
          placeholder="Escriba aqui"
          value={precio}
          onChange={(event) => setPrecio(event.target.value)}
          required
        />
        </label>
        <label>Marca
        <input 
          type="text"
          placeholder="Escriba aqui"
          value={marca}
          onChange={(event) => setMarca(event.target.value)}
          required
        />
        </label>
        <label>Cantidad
        <input 
          type="number"
          placeholder="Escriba aqui"
          value={cantidad}
          onChange={(event) => setCanidad(event.target.value)}
          required
        />
        </label>
          {verproducto  && <li>{verproducto}</li>}
          {verprecio && <li>{verprecio}</li>}
          {vermarca && <li>{vermarca}</li>}
          {vercantidad && <li>{vercantidad}</li>}


          <br />
          <br />
          <button className="btn btn-success" type="submit">Enviar</button>
         
          </form>
        
    
      </div>
      
 
   
    
  );
}

export default Formulario;