import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/db" element={<Dashboard/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
