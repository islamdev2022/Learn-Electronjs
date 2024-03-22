import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Gerant/home';
import Personnel from './pages/Gerant/Personnel/Personnel';

import Login from './pages/LoginPage';
import ExampleComponent from './components/exampleComponent';
import Stock from './pages/Gerant/Stock/Stock';
import Comptabilite from './pages/Gerant/Comptabilite/Comptabilite';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
         <Route path="/home" element={<Home/>}/>
         <Route path="/home/Personnel" element={<Personnel/>}/>
         <Route path='/home/Stock' element={<Stock/>} />
         <Route path="/home/comptabilite" element={<Comptabilite/>}/>
      </Routes>
     

      
    </Router>
    
    
     
    </div>
  );
}


export default App;
