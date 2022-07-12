import React, { useEffect } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export default function Read() {
  const db = collection(database, "Favorites");
  const readData = async () => {
    const userDoc = doc(db, localStorage.getItem("ID") || "S");
    await getDoc(userDoc).then((docc) => {
      if (docc.exists()) {
        console.log(docc.data());
        // setfavMovies(docc.data());
      }
    });
  };
  useEffect(() => {
    readData();
  }, []);
  return (
    <button type="button" onClick={readData}>
      .
    </button>
  );
}
