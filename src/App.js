import logo from "./logo.svg";
import ProductList from "./ProductList";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Hoc from "./Hoc";

function App() {
  return (
    <Hoc>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <ProductList />
            </Route>
            <Route path="/Product/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    </Hoc>
  );
}

export default App;
