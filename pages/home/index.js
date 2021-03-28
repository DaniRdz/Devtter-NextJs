import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import Deveet from "components/deveet";
import Create from "components/icons/create";
import HomeIcon from "components/icons/home";
import Search from "components/icons/search";

import useUser from "hooks/useUser";

import styles from "styles/TimeLine.module.css";
import { fetchLatestDeveets } from "firebase/client";

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestDeveets().then(setTimeline);
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio | Devtter</title>
      </Head>
      <header className={styles.header}>
        <h2>Inicio</h2>
      </header>
      <section className={styles.timeLine}>
        {timeline.map((deveet) => {
          const {
            userId,
            avatar,
            img,
            content,
            userName,
            createdAt,
            id,
          } = deveet;
          return (
            <Deveet
              key={id}
              avatar={avatar}
              content={content}
              userName={userName}
              userId={userId}
              createdAt={createdAt}
              id={id}
              img={img}
            />
          );
        })}
      </section>
      <nav className={styles.nav}>
        <Link href="/home">
          <a>
            <HomeIcon width={32} heigth={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Search width={32} heigth={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/compose/deveet">
          <a>
            <Create width={32} heigth={32} stroke="#09f" />
          </a>
        </Link>
      </nav>
    </>
  );
}
