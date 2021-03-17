import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Devtter :D</h1>
      </div>
    </div>
  );
}
