import Link from "next/link";
import handler from "./api/hello";
import Movie from "./api/Movie";
import React,{useEffect, useState} from "react";

const API_Key = "af70d4de-1ee0-4425-a428-b726e4cbbe0e";
const IMAGE_API = "https://kinopoiskapiunofficial.tech/api/v2.2/films/{id}/images?type=POSTER"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

type Movie = {
    nameRu:string, posterUrl:string, rating: string, filmId: number
}

export default function Home() {
    const [ movies, setMovies ] = useState<Movie[]>([]);

    useEffect( () => {
            fetch(API_URL_POPULAR, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": API_Key,
                },
            })
                .then(res => res.json())
                .then((data) => {
                    // console.log(data);
                    setMovies(data.films);
                });

        }, []);
    return (<>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <div>
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.filmId} {...movie} />)}
            </div>
        </>

    );


}
