import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import AppLayout from "components/appLayout";
import Botton from "components/botton";

import useUser from "hooks/useUser";

import { addDeveet } from "firebase/client";

import styles from "styles/ComposeDeveet.module.css";

const COMPOSE_STATE = {
  USER_NOT_KNOWN: 0,
  LOADDING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function ComposeDeveet() {
  const user = useUser();
  const [message, setMessage] = useState("");
  const [composeStatus, setComposeSatus] = useState(
    COMPOSE_STATE.USER_NOT_KNOWN
  );
  const router = useRouter();

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComposeSatus(COMPOSE_STATE.LOADDING);

    addDeveet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setComposeSatus(COMPOSE_STATE.ERROR);
        console.log("addDeveet Error", err);
      });
  };

  const isButtonDisabled =
    message.length === 0 || composeStatus === COMPOSE_STATE.LOADDING;
  return (
    <AppLayout>
      <Head>
        <title>Compose Deveet | Devtter</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.deveetTextarea}
          placeholder="What's going on?"
          value={message}
          onChange={handleChange}
        ></textarea>
        <div className={styles.btn}>
          <Botton disabled={isButtonDisabled}>Deveetear</Botton>
        </div>
      </form>
    </AppLayout>
  );
}
