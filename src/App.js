import './App.css';
import Header from './components/Header';
import Indicators from './components/Indicators';
import Menu from './components/Menu';
import Cards from './components/Cards';
import "./styles/Formulas.css";
import ManagerBlock from './components/ManagerBlock';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Header />
      </header>
      <main>
        <Indicators />
        <h1 className="reason-header">Чому вам варто долучитись?</h1>
        <Cards />
        <ManagerBlock />
      </main>
    </div>
  );
}

export default App;
