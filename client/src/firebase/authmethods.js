import firebase from "./firebase";

export const authMethods = {
  signup: (email, pw, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        setToken(window.localStorage.token);
      })
      .catch((err) => setErrors((prev) => [...prev, err.message]));
  },

  signin: (email, pw, setErrors, setToken, setStatus) => {
    setStatus("loading");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pw)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        setToken(window.localStorage.token);
        setStatus("authenticated");
      })
      .catch((err) => setErrors((prev) => [...prev, err.message]));
  },

  signout: (setErrors, setToken) => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem("token");
        setToken(null);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        localStorage.removeItem("token");
        setToken(null);
      });
  },
};
