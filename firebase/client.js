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

export const addDeveet = ({ avatar, content, userId, userName, img }) => {
  return db.collection("deveets").add({
    avatar,
    userName,
    userId,
    content,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    shareCount: 0,
  });
};

const mapDeveetFromFirebase = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return { ...data, id, createdAt: +createdAt.toDate() };
};

export const listenLatestDeveets = (callback) => {
  return db
    .collection("deveets")
    .orderBy("createdAt", "desc")
    .onSnapshot(({ docs }) => {
      const newDeveets = docs.map(mapDeveetFromFirebase);
      callback(newDeveets);
    });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`);
  const task = ref.put(file);
  return task;
};
