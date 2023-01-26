// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'zadanie5-e184e',
    appId: '1:828950371900:web:07719ecdc79b5c2c11ed39',
    databaseURL: 'https://zadanie5-e184e-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'zadanie5-e184e.appspot.com',
    apiKey: 'AIzaSyCKYV0uw6sonZh4IX7LCfT6R1mfU6Nxt5k',
    authDomain: 'zadanie5-e184e.firebaseapp.com',
    messagingSenderId: '828950371900',
    measurementId: 'G-P4MBZBXTRL',
  },
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCKYV0uw6sonZh4IX7LCfT6R1mfU6Nxt5k',
    authDomain: 'zadanie5-e184e.firebaseapp.com',
    databaseURL:
      'https://zadanie5-e184e-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'zadanie5-e184e',
    storageBucket: 'zadanie5-e184e.appspot.com',
    messagingSenderId: '828950371900',
    appId: '1:828950371900:web:07719ecdc79b5c2c11ed39',
    measurementId: 'G-P4MBZBXTRL',
  },
};

export const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
