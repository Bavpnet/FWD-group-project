import React, { useContext, useEffect, useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
import Menu from "../src/components/menu";
import styles from "../styles/Settings.module.css";
import { IsSignedInContext } from "./_app";

export default function Settings() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;

  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [router]);
  // if(window!==undefined) userC =JSON.parse(localStorage.getItem('user'));
  const auth = getAuth(app);
  const changePassword = () => {
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    if (password !== newPassword) {
      alert("Password ");
      return;
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        updatePassword(user, password)
          .then((response) => {
            console.log(response);
            alert("Password updated");
            setPassword("");
            setNewPassword("");
          })
          .catch((err) => {
            console.log(err);
            alert("Error");
          });
      } else {
        console.log("Sign in Please");
      }
    });
    // console.log (response.user);
    // console.log(JSON.parse(localStorage.getItem('user')));
  };
  if (!isSignedIn) {
    return <div />;
  }
  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <h1>Settings</h1>
        <div className={styles.registration_personalData}>
          <div className={styles.main}>
            <div className={styles.password}>
              <img src="../settings_icon.svg" alt="j" />
              <div className={styles.change}>
                <h2>Change the password</h2>
                <p>Enter the new password</p>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  type="password"
                  alt="password"
                />
                <p>Enter the password again</p>
                <input
                  onChange={(event) => setNewPassword(event.target.value)}
                  value={newPassword}
                  type="password"
                  alt="password"
                />
                <button
                  type="button"
                  className={styles.changePassword}
                  onClick={changePassword}
                >
                  Change Password
                </button>
              </div>
            </div>

            <div className={styles.password}>
              <img src="../theme_icon.svg" alt="j" />
              <div className={styles.change}>
                <h2>Change Theme</h2>
                <div>
                  <label htmlFor="change-theme-checkbox">
                    Light theme
                    <input type="checkbox" id="change-theme-checkbox" checked />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.personalData}>
            <img src="../person_icon.svg" alt="j" />
          </div>
        </div>
      </div>
    </div>
  );
}
