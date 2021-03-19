import { useEffect, useState } from "react";

import AppLayout from "components/appLayout";
import Deveet from "components/deveet";

import styles from "styles/TimeLine.module.css";
export default function Home() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <AppLayout>
      <header className={styles.header}>
        <h2>Inicio</h2>
      </header>
      <section className={styles.timeLine}>
        {timeline.map((deveet) => {
          const { id, avatar, message, username } = deveet;
          return (
            <Deveet
              key={id}
              avatar={avatar}
              message={message}
              username={username}
              id={id}
            />
          );
        })}
      </section>
      <nav className={styles.nav}>holi</nav>
    </AppLayout>
  );
}
