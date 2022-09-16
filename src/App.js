import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Header_2 from "./Header_2";
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import ViewAll from "./ViewAll";
import Singleproduct from "./Singleproduct";


const promise = loadStripe(
  "pk_test_51LdchxSF6S4IYr0d69236aC1Sws9T2BubmZIy2jc54YwHShzm4BVXvFUMY2lAk7CxFAxOvviI2qC4c4DOsgyPnZ700pWe6J27D"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/categories">
            <Header />
            <Categories />
          </Route>
          <Route path="/viewall">
            <Header />
            <Header_2 />
            <ViewAll />
          </Route>
          <Route path="/singleproduct">
            <Header />
            <Header_2 />
            <Singleproduct />
          </Route>
          <Route path="/">
            <Header />
            <Header_2 />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
