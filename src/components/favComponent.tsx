import React, { useEffect, useState,useContext } from "react";
import styles from "../../styles/favComponent.module.css";
import { doc, setDoc } from "firebase/firestore";
import { app, database } from '../../firebaseConfig'
import {
    collection,
    addDoc
} from 'firebase/firestore'
import useRouter from "next/router";
import {IsSignedInContext} from '../../pages/_app'
export default function FavComponent({ nameRu, isfav, setfavMovies }:
    { nameRu: string, isfav: boolean, setfavMovies: Function }) {
        const {isSignedIn, setIsSignedIn}=useContext(IsSignedInContext)!
    // let router = useRouter();
    const db = collection(database, 'Favorites');
    const [userid]=useState(isSignedIn);
        return (
        <div className={styles.main}>
            <p>{nameRu}</p>
            <button
                onClick={(event) => {
                    setfavMovies((pre :Array<Array<any>>)=> {
                        let pre2 = pre;
                        pre2 = pre2.filter(movie => (movie[0] != nameRu));
                        console.log(pre2);
                        return pre2;
                    });
                    setDoc(doc(db, userid), {
                        [nameRu]:false
                      },{merge :true});
                }}
                className={styles.btn}
            ><img src="../heart.png" alt="heart" /></button>
        </div>

    );
}