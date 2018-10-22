# AngularFireSSOApp

A simple web application which implements Google Single Sign-On authentication.

### Setup

Save your Firebase configuration object to: `src/environments/firebase.config.ts`

Example:
```js
export const firebase_config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app-name.firebaseapp.com",
  databaseURL: "https://your-app-name.firebaseio.com",
  projectId: "your-app-name",
  storageBucket: "",
  messagingSenderId: "1234567890"
};
```
Install the required dependencies:
```sh
$ npm install
```

### Build & Run the app
```sh
$ ng serve --open
```
