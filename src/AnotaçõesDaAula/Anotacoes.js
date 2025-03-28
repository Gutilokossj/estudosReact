import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Gustavo Fernandes"

  const newName = name.toUpperCase()

  function sum (a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2> Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem"></img>
      <HelloWorld/>
    </div>
  )
}

export default App;
