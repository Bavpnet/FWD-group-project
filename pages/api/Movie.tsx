import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";


const API_INFO_BBY_ID = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const API_Key = "af70d4de-1ee0-4425-a428-b726e4cbbe0e";

export default function Movie({nameRu, posterUrl, rating, filmId} : {nameRu:string, posterUrl:string, rating: string, filmId: number}) {
    let API = API_INFO_BBY_ID+ filmId;
    console.log(filmId)
    const [ film, setMovies ] = useState<any>('');

    useEffect( () => {
        fetch(API, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_Key,
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.description);
            });


    },[] );


    return (
        <div>
            <img src={posterUrl} alt = {nameRu}/>
           <a>{nameRu}, {rating},</a>
            {film}

        </div>
    )

}