// Set the configuration for your app
// TODO: Replace with your project's config object

console.log("testing", firebase);
var config = {
  apiKey: "AIzaSyBUD7AywWjXmiVpsrurJs2DgFwdQ1P5VeM",
  authDomain: "videoanalytics-bb52a.firebaseapp.com",
  databaseURL: "https://videoanalytics-bb52a.firebaseio.com",
  // storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
export const database = firebase.database();