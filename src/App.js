import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './component/auth/register';
import Login from './component/auth/login';
import Home from './component/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
