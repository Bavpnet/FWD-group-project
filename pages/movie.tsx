import React from "react";
import styles from "../styles/Movie.module.css";
import Link from "next/link";

export default function Movie({
  nameRu,
  filmId,
  posterUrl,
  rating,
}: {
  nameRu: string;
  filmId: number;
  posterUrl: string;
  rating: string;
}) {
  return (
    <div className={styles.movie}>

      <img src={posterUrl} alt={nameRu} />
      <div className={styles.movie_info}>
          {/* eslint-disable-next-line no-template-curly-in-string */}
       <Link href={"/movies/"+filmId} key = {filmId}><h3>{nameRu}</h3></Link>
        <div className={styles.meta}>
          <button><img src="../heart_nofill.png" alt="heart" /></button>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
