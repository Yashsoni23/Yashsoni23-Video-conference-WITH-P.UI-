import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  getDoc,
  doc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import { initializeApp, FirebaseApp } from "firebase/app";
import firebase from "firebase/app";
import { getDatabase, get, set, ref, child } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyChBqVPNvHMmKcVQSq0QCM-2B7zif4YNho",
  authDomain: "videoconferenceweb.firebaseapp.com",
  projectId: "videoconferenceweb",
  storageBucket: "videoconferenceweb.appspot.com",
  messagingSenderId: "180064810254",
  appId: "1:180064810254:web:354b811f519160a8e7535f",
  measurementId: "G-H4XQ3F8J2B",
  databaseUrl: "https://videoconferenceweb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [Uid, setUid] = useState();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.email);
        setUid(user.uid);
        setUserName(user.displayName);
        get(child(ref(database), `users/` + user.displayName))
          .then((snapshot) => {
            setUserDetail(snapshot.val());
            // console.log(snapshot.val(), "This is UserDetail");
          })
          .catch((error) => console.log(error));
      } else {
        setUser(null);
      }
    });
  }, []);
  const isLoggedIn = user ? true : false;

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email)
      .then((p) => console.log("pw reset email sented", p))
      .catch((err) => console.log(err));
  };
  const UserDetails = async (FirstName, LastName, email, password) => {
    return set(ref(database, "users/" + FirstName), {
      FirstName,
      LastName,
      email,
      password,
      // uid: user.uid,
    });
  };

  const signout = async () => {
    return await signOut(auth);
  };
  const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    if (user) {
      setUser(user);
      console.log("Google Sign-In Successful");
      // You can add more logic here, like saving the user's information to your database.
      // Example:
      // UserDetails(user.displayName, user.email, null, null);
    }
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FireChat Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const sendMessage = async (text, time) => {
    try {
      const uid = auth.currentUser.uid;
      const photoURL = auth.currentUser.photoURL;

      const docRef = await addDoc(collection(db, "messages"), {
        text: text,
        createdAt: time,
        uid,
        photoURL,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FirebaseContext.Provider
        value={{
          signUp,
          signIn,
          signout,
          UserDetails,
          userDetail,
          userName,
          isLoggedIn,
          signInWIthGoogle,
          resetPassword,
          sendMessage,
          db,
          Uid,
        }}
      >
        {props.children}
      </FirebaseContext.Provider>
    </>
  );
};
