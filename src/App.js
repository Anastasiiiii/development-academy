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
import Gallery from './components/Gallery';
import ProgramElements from './components/ProgramElements';
import CarouselBox from './components/CarouselBox';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Header />
      </header>
      <main>
        <Indicators />
        <h1 className='reason-header' id="details-container">Чому вам варто долучитись?</h1>
        <Cards />
        <ManagerBlock />
        <Teaminfo />
        <Video />
        <Gallery />
        <ProgramElements />
        <CarouselBox />
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
