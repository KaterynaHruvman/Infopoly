import { Routes, Route, HashRouter} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';

import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>      
        <Route path="/aboutus" element={<AboutUs/>}/>  
        <Route path="/contactus" element={<Contacts/>}/>  
      </Routes>  
      <Footer/>  
    </div>
  );
}

export default App;
