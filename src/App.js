import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";
import About from "./components/Pages/About";
import { Projects } from "./components/Pages/Projects";
import { Contact } from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import Resume from "./components/Pages/Resume";
import Nav from "./components/assets/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
