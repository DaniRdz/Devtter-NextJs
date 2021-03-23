import Avatar from "components/avatar";

import useTimeAgo from "hooks/useTimeAgo";

import styles from "styles/Devteet.module.css";

export default function Deveet({
  userId,
  userName,
  content,
  avatar,
  createdAt,
}) {
  const timeAgo = useTimeAgo(createdAt);
  return (
    <article className={styles.devteetContainer}>
      <div className={styles.devteetAvatar}>
        <Avatar alt={userName} src={avatar} />
      </div>
      <section>
        <header className={styles.header}>
          <strong>{userName}</strong>
          <span>-</span>
          <div>{timeAgo}</div>
        </header>
        <p className={styles.devteetMessage}>{content}</p>
      </section>
    </article>
  );
}
