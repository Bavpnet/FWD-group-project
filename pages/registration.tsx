import React from "react";
import styles from "../styles/Registration.module.css";
import Head from 'next/head'
import { useState } from 'react';
import { app } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router';
import Link from 'next/link'
import handlerror from '../src/utils/handleFirebaseError'
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const auth = getAuth(app);
    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                if (response.user)
                    if (response.user.accessToken)
                        sessionStorage.setItem('Token', response.user.accessToken);
                console.log(response.user);
                router.push('/');
            }
            ).catch(err => {
                alert(handlerror(err.message));
            })
    }
    return (
        <div className={styles.body}>
            <div className={styles.form}>
                <h1>Join us!</h1>
                <p className={styles.meta}>Email</p>
                <input

                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type={"email"}
                    alt={"email"}

                />
                <p className={styles.meta}>Password</p>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type={"password"}
                    alt={"password"}
                />
                <button
                    onClick={signUpUser}
                >
                    Sign up</button>
                <p className={styles.question}>Already have account?</p>
                <Link href="/signin">
                    <a>Sign in</a>
                </Link>
            </div>
        </div>
    );
}