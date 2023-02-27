import { createContext, useContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, get, set, ref, child } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


const FirebaseContext = createContext(null);

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
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const [User, setUser] = useState(null);
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    onAuthStateChanged(auth,( user) => {
      if (user) {
        setUser(user);
        console.log(User,"This is User");
        get(child(ref(database), `users/` + user.uid))
          .then((snapshot) => {
            setUserDetail(snapshot.val());
            console.log(userDetail,"This is UserDetail");
          })
          .catch((error) => console.log(error));
      } else {
        setUser(null);
      }
    });
  }, []);

  const isLoggedIn = User ? true : false;
  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const UserDetails = async (FirstName, LastName, email, password) => {
    return set(ref(database, "users/" + User.uid), {
      FirstName,
      LastName,
      email,
      password,
      uid: User.uid,
    });
  };

  const signout = signOut(auth);
  return (
    <>
      <FirebaseContext.Provider
        value={{
          signUp,
          signIn,
          signout,
          UserDetails,
          userDetail,
          isLoggedIn,
        }}
      >
        {props.children}
      </FirebaseContext.Provider>
    </>
  );
};