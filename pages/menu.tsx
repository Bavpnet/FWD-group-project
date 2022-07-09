import React from "react";
import styles from "../styles/Home.module.css";
import handleOnSubmit from "."
export default function Menu() {
    return(
        <div>
            <header className = {styles.head}>
                <ul className= {styles.hr}>
                    <li><a href="">Home</a></li>
                    <li><a href="/favourites">Favorites</a></li>
                </ul>
                <img src={"../InnoPoisk.svg"} alt = {"InnoPoisk"}/>
                <div className={styles.right}>

                    <a className={styles.btn} href="/registration"><img src={"../user.png"} alt={""}/></a>
                </div>
            </header>
        </div>
    );
}