import { useHistory } from "react-router-dom";
import firebase from "./firebase";

export const usermethods = {
  setUser: () => {
    const user = firebase.auth().currentUser;
    if (user) {
      return user;
    }
  },
};
