import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/db" element={<Dashboard/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
