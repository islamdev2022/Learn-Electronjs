import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Gerant/home';
import Personnel from './pages/Gerant/Personnel/Personnel';

import Login from './pages/LoginPage';
import ExampleComponent from './components/exampleComponent';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/Personnel" element={<Personnel/>}> </Route>
      </Routes>
     

      
    </Router>
    
    
     
    </div>
  );
}


export default App;
