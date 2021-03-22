import Avatar from "components/avatar";

import styles from "styles/Devteet.module.css";

export default function Deveet({
  userId,
  userName,
  content,
  avatar,
  createdAt,
}) {
  return (
    <article className={styles.devteetContainer}>
      <div className={styles.devteetAvatar}>
        <Avatar alt={userName} src={avatar} />
      </div>
      <section>
        <header className={styles.header}>
          <strong>{userName}</strong>
          <span> - </span>
          <date>{createdAt}</date>
          <p className={styles.devteetMessage}>{content}</p>
        </header>
      </section>
    </article>
  );
}
