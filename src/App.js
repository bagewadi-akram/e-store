import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ProductOpenSend from "./ProductOpenSend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Profile from "./Profile";
import Login from "./Login";
import Payment from "./Payment";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
              <Payment />
            {/* </Elements> */}
          </Route>

          <Route path="/profile">
            <Header />
            {/* <Profile /> */}
            <Login />
          </Route>

          <Route path="/productopensend">
            <Header />
            <ProductOpenSend />
          </Route>

          <Route path="/cart">
            <Header />
            <Cart />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
