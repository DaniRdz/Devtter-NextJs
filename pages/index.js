import Head from "next/head";

import Button from "../components/botton";

import styles from "../styles/Home.module.css";

export default function Home() {
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
          <Button>Loggin With GitHub</Button>
        </div>
      </div>
    </div>
  );
}
