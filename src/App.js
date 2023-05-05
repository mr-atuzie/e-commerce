import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Categorie from "./pages/Categorie";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home simplified />} />
          <Route path="/category/:cat" element={<Categorie />} />
          <Route path="/product/:id" element={<Product simplified />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite-clothes" element={<Favorites />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
