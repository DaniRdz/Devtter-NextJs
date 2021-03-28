import Avatar from "components/avatar";

import useTimeAgo from "hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "styles/Devteet.module.css";

export default function Deveet({
  id,
  userId,
  userName,
  content,
  avatar,
  createdAt,
  img,
}) {
  const timeAgo = useTimeAgo(createdAt);
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/status/${id}`);
  };
  return (
    <article className={styles.devteetContainer} onClick={handleArticleClick}>
      <div className={styles.devteetAvatar}>
        <Avatar alt={userName} src={avatar} />
      </div>
      <section>
        <header className={styles.header}>
          <strong>{userName}</strong>
          <span>-</span>
          <Link href={`/status/${id}`}>
            <time>{timeAgo}</time>
          </Link>
        </header>
        <p className={styles.devteetMessage}>{content}</p>
        {img && <img className={styles.image} src={img} />}
      </section>
    </article>
  );
}
