import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import AppRouter from './Routes/AppRouter';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Testimonials from './Pages/Testimonials';

function App() {
  return (
    <div className="">
    <Home/>
    <About/>
    <Product/>
    <Testimonials/>
    <Contact/>
    </div>
  );
}

export default App;
