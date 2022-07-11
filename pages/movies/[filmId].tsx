import React from "react";
import Menu from "../menu";
import styles from "/styles/movieInfo.module.css";

export default function moviePage(){

    return(

           <div>
               <Menu/>

               <div className={styles.container}>
                   <img src="../img.png" alt={"bat"} />
                   <div className={styles.info}>
                       <h1>Batman</h1>
                      <h2> About movie</h2>
                      <div className={styles.general}>
                       <div>
                           <h3>Year</h3>
                           <h4>2022</h4>
                       </div>
                       <div>
                           <h3>Genre</h3>
                           <h4>Thriller</h4>
                       </div>
                       <div>
                           <h3>Link</h3>
                           <li href = "https://www.kinopoisk.ru/film/590286/">Link</li>
                       </div>
                      </div>

                   </div>
               </div>
           </div>

    );
}