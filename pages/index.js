import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Welcome to Devtter</h1>
      <nav className={styles.nav}>
        <Link href="/timeline">Time line</Link>
      </nav>
    </div>
  );
}
