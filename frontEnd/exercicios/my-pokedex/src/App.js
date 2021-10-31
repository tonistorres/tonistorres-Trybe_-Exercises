import './css/App.css';
import Head from "./components/Head";
import DataTitleProjects from "./DataTitleProjects";
import Fotter from "./components/Fotter";
import Pokemon from "./components/Pokemon"; 
import TitleCustom from './components/TitleCustomizado';

function App() {
  return (
    <>
   <Head titleProject={DataTitleProjects}/>
    <TitleCustom title='Pokedex' />
    <Pokemon />
    <Fotter />
    </>
  );
}

export default App;
