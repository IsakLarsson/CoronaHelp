import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { signInWithGoogle, auth } from "./firebase/firebase";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";
import firebase from "./firebase/firebase";

import Signup from "./components/Signup";
import Signin from "./components/Signin";

import { useAuth } from "./hooks/useAuth";

import Home from "./pages/home/Home";
import Landingpage from "./pages/landing/Landingpage";
import { userContext } from "./hooks/useAuth";

const App = () => {
  const { initializing, user } = useAuth();
  const { status } = useContext(firebaseAuth);

  if (initializing || status === "loading") {
    return <div>loding</div>;
  }

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            user === null ? (
              <Landingpage />
            ) : (
              <userContext.Provider value={{ user }}>
                <Home />
              </userContext.Provider>
            )
          }
        />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </>
  );
};

export default App;
