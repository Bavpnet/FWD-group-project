import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { app } from "../firebaseConfig";
import styles from "../styles/Registration.module.css";
import handlerror from "../src/utils/handleFirebaseError";
import { IsSignedInContext } from "./_app";

export default function Signup() {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const auth = getAuth(app);
  const signUpUser = () => {
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response.user) setIsSignedIn(response.user.uid);
        console.log(response.user);
        router.push("/");
      })
      .catch((err) => {
        alert(handlerror(err.message));
      });
  };
  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h1>Join us!</h1>
        <p className={styles.meta}>Email</p>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
          alt="email"
        />
        <p className={styles.meta}>Password</p>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
          alt="password"
        />
        <button type="button" onClick={signUpUser}>
          Sign up
        </button>
        <p className={styles.question}>Already have account?</p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}
