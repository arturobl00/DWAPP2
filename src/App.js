import React, {Fragment} from 'react';
import Mifor from './Componentes/For';
import Miif from './Componentes/If';
import Micomponente from './Componentes/Micomponente';

function App() {
  return (
    <Fragment>
      <h1>Segunda Practica Componentes JSX</h1>
      <Micomponente />
      <Micomponente />
      <Micomponente />
      <p>-------------------------------------------------</p>
      <Miif />
      <p>-------------------------------------------------</p>
      <Mifor />
    </Fragment>
  );
}

export default App;
