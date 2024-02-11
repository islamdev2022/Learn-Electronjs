import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Work from './pages/Work';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
         <Route path='/work' element={<Work/>}/>
      </Routes>
    </Router>
     
    </div>
  );
}


export default App;
