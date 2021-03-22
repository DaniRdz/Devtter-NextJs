import { useState } from "react";

import AppLayout from "components/appLayout";
import Botton from "components/botton";

import useUser from "hooks/useUser";

import styles from "styles/ComposeDeveet.module.css";

export default function ComposeDeveet() {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("holi", message);
  };
  return (
    <AppLayout>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.deveetTextarea}
          placeholder="What's going on?"
          value={message}
          onChange={handleChange}
        ></textarea>
        <div className={styles.btn}>
          <Botton disabled={message.length === 0}>Deveetear</Botton>
        </div>
      </form>
    </AppLayout>
  );
}
