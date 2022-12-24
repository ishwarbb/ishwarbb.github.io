import './App.css';
import './background';
import NavBar from './Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyHome from './myhome';
import MyIndex from './myindex';
import About from './about';
import Skills from './skills';
import ContactMe from './contactme';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="component">
          <Switch>
            <Route path="/index">
              <MyIndex />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
            <Route exact path="/">
              <MyHome />
            </Route>
          </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
