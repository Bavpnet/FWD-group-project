import React, { useEffect, useState, useContext } from "react";
import { getAuth } from "firebase/auth";
import { collection, getDoc, doc } from "firebase/firestore";
import { app, database } from "../firebaseConfig";
import { IsSignedInContext } from "./_app";
import Menu from "../src/components/menu";
import FavComponent from "../src/components/favComponent";
import styles from "../styles/favComponent.module.css";

export default function Favourites() {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const auth = getAuth(app);
  const [favMovies, setfavMovies] = useState<Array<Array<any>>>([]);
  const db = collection(database, "Favorites");

  function readData() {
    if (!isSignedIn) return;
    const userDoc = doc(db, isSignedIn);
    getDoc(userDoc).then((docc) => {
      if (docc.exists()) {
        setfavMovies(Object.entries(docc.data()));
      }
    });
  }

  function result() {
    const movies = favMovies.filter((movie) => movie[1]);
    console.log(movies);
    return movies.map((movie) => (
      <FavComponent
        nameRu={movie[0]}
        isfav={movie[1]}
        setfavMovies={setfavMovies}
      />
    ));
  }

  useEffect(() => {
    console.log(auth.currentUser);
    readData();
    // eslint-disable-next-line no-unused-expressions
    result;
  }, []);

  return (
    <>
      <Menu />
      <div className={styles.body}>
        <h1>Favourite page</h1>
        <div>{result()}</div>
      </div>
    </>
  );
}
