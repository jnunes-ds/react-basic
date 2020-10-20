import React from 'react';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="João" email="joao@mail.com" data={new Date(2020, 10, 14)}>
        Olá, tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="maria@mail.com" data={new Date(2020, 10, 17)}>
        Olá, tudo bem sim.
      </Comentario>
    </div>
  );
}

export default App;
