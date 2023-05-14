import { useState } from 'react';
//Cree una aplicacion que muestre y oculte una seccion de texto al hacer clic en un boton
function OcultarTexto() {
const [mostrar, setMostrar] = useState(true);


var texto= <h5 className='text-center'>
My Lip Shine Lacquer es una nueva fórmula liviana 2 en 1 que brinda el color de una barra de labios
 y el brillo luminoso de un brillo mientras nutre los labios dejándolos ultrasuaves. 
 Es cómodo de llevar gracias a su textura no pegajosa.
</h5>

function Click() {
    setMostrar(!mostrar);
  }

  return (
    <>
        <div className='text-center'>
           <h3>Cree una aplicación que muestre y oculte una sección de texto al hacer click en un boton</h3>
        <button className='btn btn-primary' onClick={Click}>
        {mostrar ? 'Ocultar Texto' : ' Mostrar Texto'}
        </button>
        </div>
     
      {mostrar && <p>{texto}</p>}
    </>
  );
}


export default OcultarTexto;