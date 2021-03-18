import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw60JAEHjKGq0Qt5ylGBPje8KtyDxytX8",
  authDomain: "devtter-99384.firebaseapp.com",
  projectId: "devtter-99384",
  storageBucket: "devtter-99384.appspot.com",
  messagingSenderId: "390662241085",
  appId: "1:390662241085:web:c05ce0ea0419c6265fe354",
  measurementId: "G-2NN6R2BGB4",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebase = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null;
    onChange(normalizedUser);
  });
};

export const loggingWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(gitHubProvider);
};
