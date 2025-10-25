import { getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBLWJ7csymq4FIN6iid6t0wlfl3U5sJqpM',
    authDomain: 'jeepney-tracking-9d0bd.firebaseapp.com',
    projectId: 'jeepney-tracking-9d0bd',
    storageBucket: 'jeepney-tracking-9d0bd.appspot.com',
    messagingSenderId: '842260338285',
    appId: '1:842260338285:web:2c3541109e52b57a271164',
    measurementId: 'G-DN1HCMHGLQ',
    databaseURL: 'https://jeepney-tracking-9d0bd-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);

export default app;
