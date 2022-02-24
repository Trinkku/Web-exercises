import './App.css';
import Header from './Components/Header';
import Adbanner from './Components/Adbanner';
import Main from './Components/Main';

function App() {


const kakka = [
{
  nmb:1,
  news:"Otsikko1"
}


]//tässä laitetaan taulukko ja luotiin olio nimeltä taulukko. Näkyy sidebänneris


  return (
    <div className="App">
   
  <Header/>
  <Adbanner/>
  <Main sivuotsikko={kakka}/>


    </div>
  );
}

export default App;
