import Home from "./pages/home/Home";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductList from "./pages/products/ProductList";
import './app.css'
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Payment from "./components/stripe/Payment";
import Success from "./components/stripe/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products?" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout/payment" element={<Payment/>}/>
        <Route path="/checkout/success" element={<Success/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
