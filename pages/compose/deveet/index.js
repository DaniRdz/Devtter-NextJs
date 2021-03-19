import AppLayout from "components/appLayout";
import Botton from "components/botton";

import styles from "styles/ComposeDeveet.module.css";

export default function ComposeDeveet() {
  return (
    <AppLayout>
      <form>
        <textarea
          className={styles.deveetTextarea}
          placeholder="What's goin on?"
        ></textarea>
        <div className={styles.btn}>
          <Botton>Deveetear</Botton>
        </div>
      </form>
    </AppLayout>
  );
}
