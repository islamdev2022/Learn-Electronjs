import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Work from './pages/LoginPage';
import ExampleComponent from './components/exampleComponent';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
         <Route path='/login' element={<Work/>}/>
      </Routes>
    </Router>
    <ExampleComponent></ExampleComponent>
     
    </div>
  );
}


export default App;
