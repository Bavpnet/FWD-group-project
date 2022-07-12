import React from "react";
import styles from "/styles/movieInfo.module.css";

export default function Info({
                                 nameRu,
                                 posterUrl,

                                 description,
    year, webUrl, ratingAgeLimits,
                             }: {
    nameRu: string;
    posterUrl: string;
    description: string;
    year: number;
    webUrl: URL;
    ratingAgeLimits: string;

    // genres: genre[] = [];

}) {

    // eslint-disable-next-line no-param-reassign
    if (ratingAgeLimits == null) ratingAgeLimits = "-";
    // eslint-disable-next-line no-param-reassign
    if (year == null) year = Number("-");
    // eslint-disable-next-line no-param-reassign
    if (description == null) description = "-";

    return (
            <div className={styles.container}>
                <img src={posterUrl} alt={nameRu} />
                <div className={styles.info}>
                    <h1>{nameRu}</h1>
                    <h2> About movie</h2>
                    <div className={styles.general}>
                        <div>
                            <h3>Year</h3>
                            <h4>{year}</h4>
                        </div>
                        <div>
                            <h3>Age</h3>
                            <h4>{ratingAgeLimits}</h4>
                        </div>
                        <div>
                            <h3>Link</h3>
                            <a href={webUrl}>Link</a>
                        </div>

                        <div>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
