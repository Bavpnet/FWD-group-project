import Menu from "../src/components/menu";
import React, { useEffect, useState, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FavComponent from "../src/components/favComponent";
import styles from "../styles/favComponent.module.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app, database } from '../firebaseConfig'
import {
  collection,
  addDoc,
  getDoc,
  doc
} from 'firebase/firestore'
import { IsSignedInContext } from './_app'
export default function Favourites() {
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!
  const auth = getAuth(app);
  useEffect(() => {
    console.log(auth.currentUser);
    readData();
    result;
  }, [])
  const [favMovies, setfavMovies] = useState<Array<Array<any>>>([]);
  const db = collection(database, 'Favorites');
  function readData() {
    if (!isSignedIn) return;
    const userDoc = doc(db, isSignedIn);
    getDoc(userDoc).then((docc) => {
      if (docc.exists()) {
        setfavMovies(Object.entries(docc.data()));
      }
      else console.log("ksm");
    })
  }
  function result() {
    const movies = favMovies.filter(movie => movie[1]);
    console.log(movies);
    return movies.map((movie) =>
      <FavComponent nameRu={movie[0]} isfav={movie[1]} setfavMovies={setfavMovies} />
    )
  }
  return (
    <>
      <Menu />
      <div className={styles.body}>
        <h1>Favourite page</h1>
        <div>
          {result()}
        </div>
      </div>
    </>
  );
}
