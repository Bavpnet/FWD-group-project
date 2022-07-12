import React, { useContext } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import Link from "next/link";
import styles from "../../styles/Movie.module.css";
import { database } from "../../firebaseConfig";
import { IsSignedInContext } from "../../pages/_app";

export default function Movie({
  setfavMovies,
  filmId,
  nameRu,
  posterUrl,
  rating,
  fav,
}: {
  setfavMovies: Function;
  filmId: number;
  fav: boolean | undefined;
  nameRu: string;
  posterUrl: string;
  rating: string;
}) {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const db = collection(database, "Favorites");
  return (
    <div className={styles.movie}>
      <img src={posterUrl} alt={nameRu} />
      <div className={styles.movie_info}>
        <Link href={`/movies/${filmId}`} key={filmId}>
          <h3>{nameRu}</h3>
        </Link>
        <div className={styles.meta}>
          {!fav && (
            <button
              type="button"
              onClick={(event) => {
                console.log(event);
                if (isSignedIn)
                  setfavMovies((pre: any) => {
                    const pre2 = { ...pre };
                    pre2[nameRu] = true;
                    return pre2;
                  });
                else {
                  alert("Sign in please");
                  return;
                }
                setDoc(
                  doc(db, isSignedIn),
                  {
                    [nameRu]: true,
                  },
                  { merge: true },
                );
              }}
            >
              <img src="../heart_nofill.png" alt="heart" />
            </button>
          )}
          {fav && (
            <button
              type="button"
              onClick={(event) => {
                console.log(event);
                setfavMovies((pre: any) => {
                  const pre2 = { ...pre };
                  pre2[nameRu] = false;
                  return pre2;
                });
                setDoc(
                  doc(db, isSignedIn),
                  {
                    [nameRu]: false,
                  },
                  { merge: true },
                );
              }}
            >
              <img src="../heart.png" alt="heart" />
            </button>
          )}
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
