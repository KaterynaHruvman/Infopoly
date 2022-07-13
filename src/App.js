import Header from "./components/Header/Header";
import './App.css'
import OurServices from "./components/Ourservises/OurServices";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";
import OurClient from "./components/OurClient/OurClient";
import Map from "./components/Map/Map"
import './App.css'
function App() {
  return (
    <div className="App">
      <Header />
      <OurServices />
      <Map />
      <OurTeam />
      <OurClient/>
      <Footer/>
    </div>
  );
}

export default App;
