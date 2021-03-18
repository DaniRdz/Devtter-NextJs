import styles from "styles/Layout.module.css";

export default function AppLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
