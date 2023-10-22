import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';
import Careers from './pages/careers';
import Contact from './pages/contact';
import Services from './pages/services'

function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/careers' Component={Careers} />
        <Route path='/contact' Component={Contact} />
        <Route path='/services' Component={Services} />


       
      </Routes>
      </Router>
    </>
  );
}

export default App;
