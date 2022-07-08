import Link from "next/link";
import handler from "./api/hello";
import Movie from "./api/Movie";
import React, {useEffect, useState} from "react";

const API_Key = "fb8c0861-9519-4d6d-9e50-76b3953a7237";
const IMAGE_API = "https://kinopoiskapiunofficial.tech/api/v2.2/films/{id}/images?type=POSTER"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

type Movie = {
    nameRu: string;
    posterUrl: string;
    rating: string;
    filmId: number
}
type Terms = {
    nameRu: string;
    description: string;
    posterUrl: string;
    rating: string;
    filmId: number
}

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [terms, setSearchTerms] = useState('');

    useEffect(() => {
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

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (terms) {
            fetch(API_URL_SEARCH + terms, {
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
            setSearchTerms("")
        }

    };

    const handleOnChange = (e) => {
        setSearchTerms(e.target.value)
    }

    return (<>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input type={"text"}
                           placeholder={"Search..."}
                           value={terms}
                           onChange={handleOnChange}
                    />
                </form>

            </header>
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
