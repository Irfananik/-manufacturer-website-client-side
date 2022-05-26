import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pagas/Blog';
import Footer from './Pagas/Components/Footer';
import Navbar from './Pagas/Components/Navbar';
import NotFound from './Pagas/Components/NotFound';
import AddReview from './Pagas/Dashboard/AddReview';
import Dashboard from './Pagas/Dashboard/Dashboard';
import MyOrder from './Pagas/Dashboard/MyOrder';
import MyProfile from './Pagas/Dashboard/MyProfile';
import User from './Pagas/Dashboard/User';
import Home from './Pagas/Home';
import MyPortfolio from './Pagas/MyPortfolio';
import Purchase from './Pagas/Purchase';
import Login from './Pagas/Register/Login';
import RequireAdmin from './Pagas/Register/RequireAdmin';
import RequireAuth from './Pagas/Register/RequireAuth';
import SignUp from './Pagas/Register/SignUp';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase/:partsId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrder/>}></Route>
          <Route path="addreview" element={<AddReview/>}></Route>
          <Route path="myprofile" element={<MyProfile/>}></Route>
          <Route path="user" element={<RequireAdmin><User/></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
