import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Header} from "../src/components/Header/Header";
import {About} from "../src/components/Links/About";
import {Delivery} from "../src/components/Links/Delivery";
import {Main} from "../src/components/Main/Main";
import {Footer} from "../src/components/Footer/Footer";
import {NavBar} from "../src/components/Navbar/Navbar";
import {Basket} from "../src/components/Basket/Basket";
import {Cpu} from "../src/components/Products/Cpu";

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
              path="/basket"
              component={Basket}
              exact
          />
      </Switch>
        <Footer/>
    </BrowserRouter>
  );
}
