import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Menu from "../../src/components/menu";
import { API_INFO_BBY_ID, API_KEY } from "../../API/dataAPI";
import Info from "./Info";
import { IsSignedInContext } from "../_app";

type Information = {
  nameRu: string;
  description: string;
  slogan: string;
};

export default function ContactId() {
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const router = useRouter();

  const [film, setInfo] = useState<Information>();
  // eslint-disable-next-line no-unused-vars
  const [fav, setFav] = useState<boolean>(false);
  useEffect(() => {
    const { filmId } = router.query;
    if (filmId) {

      fetch(API_INFO_BBY_ID + filmId, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === "") {
            return;
          }
          setInfo(data);
        })
        .catch(() => {});
    }
  }, [router]);

  return (
    <div>
      <Menu />
      <div>
        <Info {...film} />
      </div>
    </div>
  );
}
