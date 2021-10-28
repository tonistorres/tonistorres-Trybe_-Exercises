
import './App.css';

const arr = ['Ir ao Banco', 'Desbloquear o Cartão', 'Transferir Dinheiro'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
   arr.map((item)=>Task(item))
  );
}

export default App;
