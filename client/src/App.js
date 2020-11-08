import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { signInWithGoogle, auth } from "./firebase/firebase";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";

import Home from "./pages/Home";

function App() {
  const { token } = useContext(firebaseAuth);
  return (
    <>
      <Switch>
        <Route exact path="/" render={(rProps) => (token === null ? <Signin /> : <Home />)} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
