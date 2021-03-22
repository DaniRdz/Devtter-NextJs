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

const db = firebase.firestore();

const mapUserFromFirebase = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
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

export const addDeveet = ({ avatar, content, userId, userName }) => {
  return db.collection("deveets").add({
    avatar,
    userName,
    userId,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    shareCount: 0,
  });
};

export const fetchLatestDeveets = () => {
  return db
    .collection("deveets")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;
        const intl = new Intl.DateTimeFormat("en-US");
        const normalizeCreatedAt = intl.format(
          new Date(createdAt.seconds * 1000)
        );
        return { ...data, id, createdAt: normalizeCreatedAt };
      });
    });
};
