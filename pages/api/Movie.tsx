import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import Info from "./Info";


const API_INFO_BBY_ID = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const API_Key = "af70d4de-1ee0-4425-a428-b726e4cbbe0e";

export default function Movie({nameRu, posterUrl, rating, filmId} : {nameRu:string, posterUrl:string, rating: string, filmId: number}) {
    let API = API_INFO_BBY_ID+ filmId;

    const [ film, setMovies ] = useState<string>();

    useEffect( () => {
        fetch(API, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_Key,
            },
        })
            .then(res => res.json())
            .then((data) => {
                setMovies(data.description);
            }).catch(e => {});


    },[] );


    return (
        <div>
            <img src={posterUrl} alt = {nameRu}/>
           <a>{nameRu}, {rating},</a>
            {film}
            {/*{film.length > 0 && film.map((film) => <Info key={film.filmId} {...film} />)}*/}
        </div>
    )

}