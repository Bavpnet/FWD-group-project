import React, { useState, useContext } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import styles from "../../styles/favComponent.module.css";
import { database } from "../../firebaseConfig";
import { IsSignedInContext } from "../../pages/_app";

export default function FavComponent({
  nameRu,
  // eslint-disable-next-line no-unused-vars
  isfav,
  setfavMovies,
}: {
  nameRu: string;
  isfav: boolean;
  setfavMovies: Function;
}) {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  // let router = useRouter();
  const db = collection(database, "Favorites");
  const [userid] = useState(isSignedIn);
  return (
    <div className={styles.main}>
      <p>{nameRu}</p>
      <button
        type="button"
        onClick={() => {
          setfavMovies((pre: Array<Array<any>>) => {
            let pre2 = pre;
            pre2 = pre2.filter((movie) => movie[0] !== nameRu);
            return pre2;
          });
          setDoc(
            doc(db, userid),
            {
              [nameRu]: false,
            },
            { merge: true },
          );
        }}
        className={styles.btn}
      >
        <img src="../heart.png" alt="heart" />
      </button>
    </div>
  );
}
