import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home';
import MedDatabase from './components/MedDatabase';
import Background from './components/Background';
import AboutUs from './components/AboutUs'
import Button from './components/Button';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';




const App = () => {

  
  return (
    <div className="appContainer">
      <div className="mainContainer">
      <Background />
      <Navbar />
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/MedDatabase' exact element={<MedDatabase/>} />
       <Route path='/AboutUs' exact element={<AboutUs/>} />
       <Route path='/MedDatabase' exact element={<Button/>} />
       <Route path='/Disclaimer' excat element={<Disclaimer/>} />
     </Routes>
     </div>
     <div className="mainFooter">
      <Footer />
     </div>
   </div>
  );
}

export default App;
