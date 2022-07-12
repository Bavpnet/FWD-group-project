import React, { useEffect, useState, useContext } from "react";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";
import styles from "../../styles/movieInfo.module.css";
import { IsSignedInContext } from "../_app";
import { database } from "../../firebaseConfig";

export default function Info({
  nameRu,
  posterUrl,
  description,
  year,
  webUrl,
  ratingAgeLimits,
}: {
  nameRu?: string;
  posterUrl?: string;
  description?: string;
  year?: number;
  webUrl?: URL;
  ratingAgeLimits?: string;

  // genres: genre[] = [];
}) {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const db = collection(database, "Favorites");
  const [fav, setFav] = useState<boolean>(false);

  function readData() {
    if (!isSignedIn) return;
    const userDoc = doc(db, isSignedIn);
    getDoc(userDoc).then((docc) => {
      if (docc.exists() && nameRu) {
        if (docc.data()[nameRu]) setFav(true);
      }
    });
  }

  useEffect(() => {
    readData();
  });

  // eslint-disable-next-line no-param-reassign
  if (ratingAgeLimits == null) ratingAgeLimits = "-";
  // eslint-disable-next-line no-param-reassign
  if (year == null) year = Number("-");
  // eslint-disable-next-line no-param-reassign
  if (description == null) description = "-";

  return (
    <div className={styles.container}>
      <img src={posterUrl} alt={nameRu} />
      <div className={styles.info}>
        <div className={styles.header}>
          <h1>{nameRu}</h1>
          {!fav && (
            <button
              type="button"
              onClick={() => {
                if (isSignedIn) setFav(true);
                else {
                  alert("Sign in please");
                  return;
                }
                if (nameRu) {
                  setDoc(
                    doc(db, isSignedIn),
                    {
                      [nameRu]: true,
                    },
                    { merge: true },
                  );
                }
              }}
            >
              <img src="../heart_nofill.png" alt="heart" />
            </button>
          )}
          {fav && (
            <button
              type="button"
              onClick={() => {
                setFav(false);
                if (nameRu) {
                  setDoc(
                    doc(db, isSignedIn),
                    {
                      [nameRu]: false,
                    },
                    { merge: true },
                  );
                }
              }}
            >
              <img className={styles.heart} src="../heart.png" alt="heart" />
            </button>
          )}
        </div>
        <h2> About movie</h2>
        <div className={styles.general}>
          <div>
            <h3>Year</h3>
            <h4>{year}</h4>
          </div>
          <div>
            <h3>Age</h3>
            <h4>{ratingAgeLimits}</h4>
          </div>
          <div>
            <h3>Description</h3>
            <p>{description}</p>
          </div>

          <div>
            {webUrl && <a href={webUrl.toString()}>Link to KinoPoisk</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
