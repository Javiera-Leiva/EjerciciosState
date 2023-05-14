import React, {useState} from 'react'


//Cree un contador que pueda ser incrementado y decrementado por un boton. 
  function Contador(){
    var [contadornum, setContador] = useState(0);
  
    function contadorIncrementado() {
      setContador(contadornum + 1);
    }
    function contadorDecrementado() {
      setContador(contadornum - 1);
    }
  
  
    return(
      <div className='text-center'>
         <h3>Cree un contador que pueda ser incrementado y decrementado por un boton.</h3>
        <h1>Contador = {contadornum}</h1>
        <button className='btn btn-primary' onClick={contadorIncrementado}>Sumar +</button>
        
        <button className='btn btn-danger' onClick={contadorDecrementado}>Restar -</button>
  
      </div>
    );
  }






export default Contador;