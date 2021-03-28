const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

admin.apps.length === 0 &&
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

export const firestore = admin.firestore();
