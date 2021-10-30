import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import HeadCustom from './components/Head';
import FotterCustom from './components/Fotter';
import DetailHead from './components/Detail';

class App extends React.Component {
  render() {
    const TitulosProjetos = {
      id: 1,
      title:"Composição de Componente 10.2 - Introdução à React - Fixation-Exercises",
    }
    const persons =[ 
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id: 1,
      name: "Sandro Costa",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },

    {
      id: 2,
      name: "Santo Torres",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },

    {
      id: 3,
      name: "Mycon Benicio",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },


    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },


    {
      id: 6,
      name: "tereza",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },


    {
      id: 7,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 8,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 9,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 10,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 11,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 12,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id:13,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },


    {
      id: 14,
      name: "Mycon Benicio",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },


    {
      id: 15,
      name: "Mycon Benicio",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id:16,
      name: "Albetiza de Sá",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },


    {
      id: 17,
      name: "Mycon Benicio",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },


    {
      id: 18,
      name: "Mycon Benicio",
      email: "sandro@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
  ]
  return (  
<>
<HeadCustom titleProject={TitulosProjetos}/>

<DetailHead />

<section className="App-container-body-main">

{persons.map( (person,position) => (
      <section className="App">
          <div className="App-body-main">
            <UserProfile key={position} user={person} />
          </div>
      </section>
            ))} {/**ess abre e fecha chave ta dizendo que estou passando codigo javaScript aqui dentro */}

</section>

<FotterCustom />

</>)
 }
}
export default App;