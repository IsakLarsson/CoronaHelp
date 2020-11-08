import React, { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { firebaseAuth } from "../../provider/AuthProvider";
import { withRouter } from "react-router-dom";
import "./index.scss";

const Home = (props) => {
  const { handleSignout } = useContext(firebaseAuth);
  const { user } = useAuth();

  if (!user) {
    props.history.push("/");
  }

  return (
    <div>
      {user.email}
      <button onClick={handleSignout}>sign out</button>
    </div>
  );
};

export default withRouter(Home);
