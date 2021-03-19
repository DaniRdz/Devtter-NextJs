import Avatar from "components/avatar";

import styles from "styles/DEvteet.module.css";

export default function Deveet({ id, username, message, avatar }) {
  return (
    <article className={styles.devteetContainer}>
      <div className={styles.devteetAvatar}>
        <Avatar alt={username} src={avatar} />
      </div>
      <section>
        <strong>{username}</strong>
        <p className={styles.devteetMessage}>{message}</p>
      </section>
    </article>
  );
}
