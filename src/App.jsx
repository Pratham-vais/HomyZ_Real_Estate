import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css"
import Companies from "./components/companies/companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/contact/Contact.jsx";
import Getstarted from "./components/get_started/Getstarted.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
