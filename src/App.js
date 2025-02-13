import './App.css';
import Header from './components/Header';
import Indicators from './components/Indicators';
import Menu from './components/Menu';
import Cards from './components/Cards';
import "./styles/Formulas.css";
import ManagerBlock from './components/ManagerBlock';
import Teaminfo from './components/TeamInfo';
import Video from './components/Video';
import "./styles/Formulas.css";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Header />
      </header>
      <main>
        <Indicators />
        <h1 className='reason-header'>Чому вам варто долучитись?</h1>
        <Cards />
        <ManagerBlock />
        <Teaminfo />
        <Video />
      </main>
    </div>
  );
}

export default App;
