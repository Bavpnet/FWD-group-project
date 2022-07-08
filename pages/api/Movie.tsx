import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import Info from "./Info";

type Info ={
    description: string;
    slogan: string;
}


const API_INFO_BBY_ID = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const API_Key = "fb8c0861-9519-4d6d-9e50-76b3953a7237";

export default function Movie({nameRu, posterUrl, rating, filmId} : {nameRu:string, posterUrl:string, rating: string, filmId: number}) {
    let API = API_INFO_BBY_ID+ filmId;

    const [ film, setInfo] = useState<Info>();

    useEffect( () => {
        fetch(API, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_Key,
            },
        })
            .then(res => res.json())
            .then((data) => {
                setInfo(data.description);
            }).catch(e => {});


    },[] );


    return (
        <div>
            <img src={posterUrl} alt = {nameRu}/>
           {nameRu}, {rating}, {film}
        </div>
    )

}