import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pagas/Components/Footer';
import Navbar from './Pagas/Components/Navbar';
import Home from './Pagas/Home';
import Purchase from './Pagas/Purchase';
import Login from './Pagas/Register/Login';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
