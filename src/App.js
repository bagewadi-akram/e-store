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
import Seller from "./Seller";
import Category from "./Category";
import Filteropen from "./Filteropen";


function App() {
 
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* ----------------------------Payment Routes------------------------ */}
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          {/* ----------------------------Vendor Routes------------------------ */}
          <Route path="/seller">
            <Header />
            <Seller />
          </Route>

          {/* ----------------------------Login Routes------------------------ */}
          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


          {/* ----------------------------filter Routes------------------------ */}

          <Route path="/filter">
            <Header />
            <Filteropen />
          </Route>

          {/* ----------------------------Category Routes------------------------ */}
          <Route path="/item">
            <Header />
            {/* <Item /> */}
            <Category />
          </Route>

          {/* ----------------------------Product Routes------------------------ */}
          <Route path="/productopensend">
            <Header />
            <ProductOpenSend />
          </Route>

          <Route path="/cart">
            <Header />
            <Cart />
          </Route>

          {/* ----------------------------Home Routes------------------------ */}
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
