import { Routes, Route, HashRouter} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';

import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>      
        <Route path="/about-us" element={<AboutUs/>}/>      
      </Routes>  
      <Footer/>  
    </div>
  );
}

export default App;
