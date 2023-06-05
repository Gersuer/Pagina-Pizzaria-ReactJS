import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact'element={<Contact/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
