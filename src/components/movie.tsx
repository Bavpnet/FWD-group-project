import React, { useEffect, useState,useContext } from "react";
import styles from "../../styles/Movie.module.css";
import { doc, setDoc } from "firebase/firestore";
import { app, database } from '../../firebaseConfig'
import {
  collection,
  addDoc
} from 'firebase/firestore'

import {IsSignedInContext} from '../../pages/_app'
import Link from "next/link";
export default function Movie({
  setfavMovies,
  filmId,
  nameRu,
  posterUrl,
  rating,
  fav
}: {
  setfavMovies:Function
  filmId:number,
  fav: boolean |undefined
  nameRu: string;
  posterUrl: string;
  rating: string;
}) {
  const {isSignedIn, setIsSignedIn}=useContext(IsSignedInContext)!
  const db = collection(database, 'Favorites')
  return (
    <div className={styles.movie}>
      {<img src={posterUrl} alt={nameRu} />}
      <div className={styles.movie_info}>
        <Link href={"/movies/" + filmId} key = {filmId}><h3>{nameRu}</h3></Link>
        <div className={styles.meta}>
          {!fav && <button
            onClick={(event) => {
              if(isSignedIn)setfavMovies((pre :any)=> {
                let pre2 = Object.assign({}, pre);
                pre2[nameRu]=true;
                return pre2;
              });
              else {
                alert('Sign in please');
                return;
              }
              setDoc(doc(db, isSignedIn), {
                [nameRu]:true
             },{merge :true});
            }}
          ><img src="../heart_nofill.png" alt="heart" /></button>}
          {fav && <button
            onClick={(event) => {
              setfavMovies((pre:any) => {
                let pre2 = Object.assign({}, pre);
                pre2[nameRu]=false;
                return pre2;
              });
              setDoc(doc(db, isSignedIn), {
                [nameRu]:false
              },{merge :true});
            }}
          ><img src="../heart.png" alt="heart" /></button>}
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
