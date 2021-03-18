import { useEffect, useState } from "react";

import AppLayout from "components/appLayout";
import Avatar from "components/avatar";

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
          return (
            <article key={deveet.id}>
              <Avatar alt={deveet.username} src={deveet.avatar} />
              <div>
                <strong>{deveet.username}</strong>
                <p>{deveet.message}</p>
              </div>
            </article>
          );
        })}
      </section>
      <nav className={styles.nav}>holi</nav>
    </AppLayout>
  );
}
