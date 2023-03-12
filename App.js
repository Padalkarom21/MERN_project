
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Ourfood from './Foodmenu/Ourfood';
import About from './component/About';
import Login from './Login/Login';
import Register from './Login/Register';
import Order from './Foodmenu/Order';
import Footer from './component/Footer';
import Donation from './component/Donation';
function App() {
  return (
   <>
   <Routes>
   <Route path='log' element={<Login />}/>
   <Route path='reg' element={<Register />}/>
   <Route path='nav' element={<Navbar />}/>
   <Route path='menu' element={<Ourfood />}/>
  
<Route path='order' element={<Order/>}/>
<Route path='about' element={<About/>}/>
<Route path='footer' element={<Footer/>}/>
<Route path='don' element={<Donation/>}/>
   </Routes>
  
   </>
  );
}

export default App;
