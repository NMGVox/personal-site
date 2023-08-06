import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore';
import './styles.css';
import createIntro from './components/introduction';
import populateSkills from './components/populateSkills';

const firebaseConfig = {

  apiKey: "AIzaSyB28mVvcfeMNE1-zJXsC7IPGrvXtJBwsvo",

  authDomain: "personal-site-c21a4.firebaseapp.com",

  projectId: "personal-site-c21a4",

  storageBucket: "personal-site-c21a4.appspot.com",

  messagingSenderId: "390311271905",

  appId: "1:390311271905:web:dfa100cc3a07f4229606a0",

  measurementId: "G-HQBKC5RHPG",

};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'skills');

async function grabSkills() {
  try {
    const snapshot = await getDocs(colRef);
    const skills = [];
    snapshot.docs.forEach((doc) => {
      skills.push({ ...doc.data() });
    });
    populateSkills(skills);
  } catch (error) {
    console.log(error.message);
  }
}

// eslint-disable-next-line no-unused-vars
function hasLoaded() {
  createIntro();
  grabSkills();
}

window.addEventListener('load', hasLoaded);
