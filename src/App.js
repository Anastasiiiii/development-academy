import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Header />
      </header>
    </div>
  );
}

export default App;
