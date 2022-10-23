import { useState } from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/cart';
import Product from './components/Product';
import Contact from './components/Contact';
import { Route, Switch, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css'
import ProductDetail from './components/ProductDetail';
import Checkout from './components/checkout';
import LoginModal from './components/Modals/LoginModal';
import SignUpModal from './components/Modals/SignUpModal';
import { AnimatePresence } from 'framer-motion';
import TopScroll from './components/topScroll';


function App() {
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();
  return (
    <>
  <Header show = {show} setShow = {setShow} showSignup = {showSignup} setShowSignup = {setShowSignup}/>  
    <div className="main-contents">
    <LoginModal show = {show} setShow = {setShow}/>
     <SignUpModal  showSignup={showSignup} setShowSignup ={setShowSignup} />
     <AnimatePresence exitBeforeEnter>
    <Switch location = {location} key= {location.pathname}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Product}/>
      <Route exact path="/products/:id" component={ProductDetail}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path ="/contact" component={Contact}/>
      {/* <Redirect to="/" /> */}
    </Switch>
    </AnimatePresence>
    </div>
    <Footer/>
    <TopScroll/>
    </>
  );
}

export default App;

