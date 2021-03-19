import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Button from "components/botton";
import Avatar from "components/avatar";
import AppLayout from "components/appLayout";

import { loggingWithGitHub, onAuthStateChange } from "firebase/client";

import styles from "styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);
  const handleClick = () => {
    loggingWithGitHub().catch((err) => {
      console.log("handleClick err", err);
    });
  };
  return (
    <AppLayout>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <Avatar
              src={user.avatar}
              alt={user.username}
              text={user.username}
            />
          </div>
        )}
      </div>
    </AppLayout>
  );
}
