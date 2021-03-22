import AppLayout from "components/appLayout";
import Botton from "components/botton";

import useUser from "hooks/useUser";

import styles from "styles/ComposeDeveet.module.css";

export default function ComposeDeveet() {
  const user = useUser();
  return (
    <AppLayout>
      <form>
        <textarea
          className={styles.deveetTextarea}
          placeholder="What's going on?"
        ></textarea>
        <div className={styles.btn}>
          <Botton>Deveetear</Botton>
        </div>
      </form>
    </AppLayout>
  );
}
