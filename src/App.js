import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./dist/css/main.css"
import HomePage from "./page/HomePage";
import LoginPage from './page/LoginPage';
import DaftarPage from './page/DaftarPage';
import SandiPage from './page/SandiPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/daftar' Component={DaftarPage} />
          <Route path='/sandi' Component={SandiPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
