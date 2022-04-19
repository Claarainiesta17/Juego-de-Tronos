import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './Components/Search/Search';
import CharactersPage from './Pages/CharacterPage/CharactersPage';
import Charactersdetails from './Pages/CharactersdetailPage/Charactersdetails';
import Casas from './Pages/CasasPage/Casas';
import Casasdetails from './Pages/CasasdetailPage/Casasdetails';
import Cronologia from './Pages/Cronologia/Cronologia';
import Home from './Pages/Home/Home';
/*import { useTranslation } from "react-i18next";*/

function App() {
  /*const [isSpanish, setIsSpanish] = useState(true);
  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
*/
  return (
    <div className="App">
    <div>
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<Charactersdetails/>}/>
        <Route path="/casas" element={<Casas/>}/>
        <Route path="/casas/:name" element={<Casasdetails/>}/>
        <Route path="/cronologia" element={<Cronologia/>}/>
    </Routes>

    </Router>
    </div>
  );
}

export default App;
