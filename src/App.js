import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Products from "./components/Pages/Products";
import Cart from "./components/Pages/Cart";
//import ProductsList from "./reducers/productsList.js";
//import { useState } from "react";
function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Products}></Route>
                <Route exact path="/cart" component={Cart}></Route>
            </Switch>
            <Footer className="Footer" />
        </Router>
    );
}

export default App;
