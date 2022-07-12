import logo from './logo.svg';
import './App.css';

function App() {
  const name = "gothics"
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name}
        </p>
        <a className="App-link" href="https://plataforma.coderhouse.com/" target="_blank" rel="noopener noreferrer">
          CoderHouse hola
        </a>
      </header>
    </div>
  );
}

export default App;

// // probando
// const pruebaObjeto ={
//   prop1: "1",
//   prop2: "2",
//   prop3: "3"
// }

// const { prop1 , prop2 = "nuevoValor"} = pruebaObjeto
// const {prop3: nuevaVar} = pruebaObjeto

// console.log(pruebaObjeto)
// console.log(prop1, prop2)
// console.log(nuevaVar)
// console.log(pruebaObjeto.prop3)
