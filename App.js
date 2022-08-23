import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Services" component={Services}/>
          <Route path="/Skills" component={Skills}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
