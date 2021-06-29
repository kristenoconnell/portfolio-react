
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
//<li><Link to="/">Home "/about" etc.

//below nav and header
//Switch, <Route path="/about"><About /> etc.


function Header() {
    return ( 
        <div>
     <header>
        <h1>KRISTEN O'CONNELL</h1>
            <nav>
                    <ul id="navMenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
   
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/about">
                <About />
                </Route>
                <Route path="/portfolio">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            </div>
    )

};

export default Header;