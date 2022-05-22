import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pagas/Components/Footer';
import Navbar from './Pagas/Components/Navbar';
import Home from './Pagas/Home';
import Purchase from './Pagas/Purchase';
import Login from './Pagas/Register/Login';
import RequireAuth from './Pagas/Register/RequireAuth';
import SignUp from './Pagas/Register/SignUp';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
