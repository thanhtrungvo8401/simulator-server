import admin from "firebase-admin";

const serviceAccount = require("../../static/authenticationKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://debugger-tool-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();

const ref = db.refFromURL(
  "https://debugger-tool-default-rtdb.asia-southeast1.firebasedatabase.app"
);

export default function initRealtimeDatabase () {
  ref.on('value', snap => {
    const value = snap.val();
    // console.log("🚀 ~ initRealtimeDatabase ~ value:", value)
  })
}