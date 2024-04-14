import Navbar from './components/Navbar/Navbar'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import spices_banner from './components/Assets/Spices_banner.png'
import contact_banner from './components/Assets/contact_banner.png'
import about_banner from './components/Assets/about_banner.png';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PaymentPage from './components/PaymentPage/PaymentPage';

// import GPayButton from './components/GPayButton';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/spices' element={<ShopCategory banner = {spices_banner} category="spices"/>} />
        <Route path='/contact' element={<Contact banner = {contact_banner} category="contact" />} />
        <Route path='/about' element={<About  banner = {about_banner}category="about"/>} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element ={<Product />} />
          </Route>
          <Route path='/cart' element ={<Cart />} />
          <Route path='/order' element ={<PlaceOrder />} />
          <Route path='/login' element ={<LoginSignup />} />
           <Route  path="/payment" element={<PaymentPage />} />
                   
             

      </Routes>
      <Footer />
      </BrowserRouter>
      {/* <GPayButton /> */}
    </div>
  );
}

export default App;
