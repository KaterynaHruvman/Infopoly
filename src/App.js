import Header from "./components/Header/Header";
import './App.css'
import OurServices from "./components/Ourservises/OurServices";
import OurTeam from "./components/OurTeam/OurTeam";
function App() {
  return (
    <div className="App">
      <Header />
      <OurServices />
      <OurTeam/>
    </div>
  );
}

export default App;
