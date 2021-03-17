import { useEffect, useState } from "react";
import Head from "next/head";

import Button from "../components/botton";

import { loggingWithGitHub, onAuthStateChange } from "../firebase/client";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  const handleClick = () => {
    loggingWithGitHub()
      .then((user) => {
        const { avatar, url, username } = user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log("handleClick err", err);
      });
  };
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.homeContainer}>
          <img className={styles.logo} src="/devtter-logo.png" alt="logo" />
          <h1 className={styles.title}>Devtter</h1>
          <h2 className={styles.subtitle}>
            Talk About Developement With Developers...
          </h2>
          {user === null && (
            <Button onClick={handleClick}>Loggin With GitHub</Button>
          )}
          {user && user.avatar && (
            <div>
              <img src={user.avatar} />
              <strong>{user.username}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
