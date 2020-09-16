import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from "./pages/Login/Login"
import Checkout from './pages/Checkout/Checkout'
import Page404 from './pages/Page404';
import Home from './pages/Home/Home';
import { useEffect } from 'react';
import { useStateValue } from './data/StateProvider';
import { auth } from './firebase';
import ProductDetail from './pages/ProductDetail/ProductDetail';



function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(async () => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
    });
    
    return () => {
      unsubscribe();
    }
  }, [])
  // console.log(user)
  return (
    <div className="App">
      <Header />
      <Switch>    
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:params" component={ProductDetail}/>
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
