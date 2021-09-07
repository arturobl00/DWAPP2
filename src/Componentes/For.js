import React, {Fragment, useState} from 'react';

const Mifor = () => {

    const [arreglo, setArreglo] = useState([1,2,3,4,5,6])
    const nuevo = 1
    const agrega = () => {
        setArreglo([...arreglo, nuevo])
    }

    return (
        <Fragment>
            <h2>Recorriendo un arreglo con un ciclo for</h2>
            <p>Para agregar mas datos oprime el boton
                <button onClick={agrega}>Clic</button></p>
            <ul>
                {
                    arreglo.map((item, index) =>
                        <li key={index}>Indice: {index} - Valor: {item}</li>
                    )
                }
            </ul>
        </Fragment>
      );
}
 
export default Mifor;