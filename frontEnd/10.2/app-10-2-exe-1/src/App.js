import './App.css';
import Image from './Image.js' // importei o componente com a primeira lletra em maiusculo como deve ser
import logo from './img/trybe.png';

function App() {
  return <Image source={logo} alternativeText={'sucesso em qualquer lugar'}/>
  ;
}

export default App;