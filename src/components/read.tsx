import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { app, database } from '../../firebaseConfig'
import {
    collection,
    addDoc,
    getDoc,
    doc,
    DocumentReference
} from 'firebase/firestore'
import { useRouter } from "next/router";


export default function Read() {
    // const [favMovies, setfavMovies] = useState(null);
    // const [fireData, setFireData] = useState([]);
    const db = collection(database,'Favorites');
    const readData = async () => {
        
            const userDoc = doc(db, localStorage.getItem('ID')||"S");
            await getDoc(userDoc).then((docc) => {
                if (docc.exists()) {
                    console.log(docc.data());
                     setfavMovies(docc.data());
                }
            })
    }
    useEffect(() => {
      readData();
        
      }, [])
    return (
        <button onClick={readData}></button>
    )
}
