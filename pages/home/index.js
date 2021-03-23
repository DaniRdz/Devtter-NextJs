import { useEffect, useState } from "react";

import AppLayout from "components/appLayout";
import Deveet from "components/deveet";

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
    <AppLayout>
      <header className={styles.header}>
        <h2>Inicio</h2>
      </header>
      <section className={styles.timeLine}>
        {timeline.map((deveet) => {
          const { userId, avatar, content, userName, createdAt, id } = deveet;
          return (
            <Deveet
              key={id}
              avatar={avatar}
              content={content}
              userName={userName}
              userId={userId}
              createdAt={createdAt}
            />
          );
        })}
      </section>
      <nav className={styles.nav}>holi</nav>
    </AppLayout>
  );
}
