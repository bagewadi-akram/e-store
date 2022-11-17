import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ProductOpenSend from "./ProductOpenSend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Profile from "./Profile";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";
import Item from "./Item";
import  Category  from "./Category";
import Seller from "./Seller";
import Loginform from "./Loginform";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/seller">
            <Header />
            <Seller />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
            <Payment />
            {/* </Elements> */}
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route path="/signup">
            <Loginform />
          </Route>

          <Route path="/item">
            <Header />
            <Item />
            {/* <Category /> */}
          </Route>
          <Route path="/login">
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
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
