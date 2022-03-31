import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {About} from "../components/Links/About";
import {Delivery} from "../components/Links/ Delivery";
import {Main} from "../components/Main/Main";
import {Footer} from "../components/Footer/Footer";
import {Amd} from "../components/Products/Amd";
import {NavBar} from "../components/Navbar/Navbar";
import {Intel} from "../components/Products/Intel";
import {Basket} from "../components/Basket/Basket";
import {Cpu} from "../components/Products/Cpu";

export function RootRouter() {
  return (
    <BrowserRouter>
        <Header/>
        <NavBar/>
      <Switch>
            <Route
                path="/about-us"
                component={About}
                exact
            />
            <Route
                path="/delivery"
                component={Delivery}
                exact
            />
            <Route
                path="/main"
                component={Main}
                exact
            />
          <Route
              path="/cpu"
              component={Cpu}
              exact
          />
          <Route
              path="/m"
              component={Intel}
              exact
          />
          <Route
              path="/basket"
              component={Basket}
              exact
          />
      </Switch>
        <Footer/>
    </BrowserRouter>
  );
}
