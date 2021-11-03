
import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!');
}

class App extends React.Component{

  render(){
      return (
      <div>
        <button onClick={handleClick}>Click!</button>
      </div>
  );
 }

}

export default App;
