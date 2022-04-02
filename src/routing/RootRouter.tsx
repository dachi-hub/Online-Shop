import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {About} from "../components/Links/About";
import {Delivery} from "../components/Links/Delivery";
import {Main} from "../components/Main/Main";
import {Footer} from "../components/Footer/Footer";
import {NavBar} from "../components/Navbar/Navbar";
import {Basket} from "../components/Basket/Basket";
import {Cpu} from "../components/Products/Cpu";
import {Mb} from "../components/Products/Mb";
import {Ram} from "../components/Products/Ram";
import {Gpu} from "../components/Products/Gpu";
import {Bp} from "../components/Products/Bp";
import {Hdd} from "../components/Products/Hdd";
import {Ssd} from "../components/Products/Ssd";
import {Payment} from "../components/Links/Payment";
import {Contacts} from "../components/Links/Contacts";

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
                    path="/payment"
                    component={Payment}
                    exact
                />
                <Route
                    path="/contacts"
                    component={Contacts}
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
                    path="/mother-boards"
                    component={Mb}
                    exact
                />
                <Route
                    path="/ram"
                    component={Ram}
                    exact
                />
                <Route
                    path="/gpu"
                    component={Gpu}
                    exact
                />
                <Route
                    path="/bp"
                    component={Bp}
                    exact
                />
                <Route
                    path="/hdd"
                    component={Hdd}
                    exact
                />
                <Route
                    path="/ssd"
                    component={Ssd}
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
