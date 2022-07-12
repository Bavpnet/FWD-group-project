import React, { useContext } from "react";
import Link from "next/link";
import styles from "../../styles/menu.module.css";
import { IsSignedInContext } from "../../pages/_app";

export default function Menu() {
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  return (
    <div>
      <header className={styles.head}>
        <ul className={styles.hr}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favourites">Favorites</Link>
          </li>
        </ul>
        <img src="../InnoPoisk.svg" alt="InnoPoisk" />
        <div className={styles.right}>
          {/* <Link className={styles.btn} href="/registration"> */}
          {/*  <img src="../user.png" alt="" /> */}
          {/* </Link> */}
          {isSignedIn && (
            <Link href="/settings">
              <button type="button" className={styles.loginbtn}>
                Settings
              </button>
            </Link>
          )}
          {!isSignedIn && (
            <Link href="/signin">
              <button type="button" className={styles.loginbtn}>
                Sign in
              </button>
            </Link>
          )}
          {isSignedIn && (
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setIsSignedIn("");
                }}
                className={styles.loginbtn}
              >
                Log out
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}
