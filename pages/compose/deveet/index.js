import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Botton from "components/botton";
import Avatar from "components/avatar";

import useUser from "hooks/useUser";

import { addDeveet, uploadImage } from "firebase/client";

import styles from "styles/ComposeDeveet.module.css";

const COMPOSE_STATE = {
  USER_NOT_KNOWN: 0,
  LOADDING: 1,
  SUCCES: 2,
  ERROR: -1,
};

const DRAG_IMAGE_STATE = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeDeveet() {
  const [message, setMessage] = useState("");
  const [composeStatus, setComposeSatus] = useState(
    COMPOSE_STATE.USER_NOT_KNOWN
  );

  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    let onProgress = () => {};
    let onError = () => {};
    let onComplete = () => {
      task.snapshot.ref.getDownloadURL().then(setImgURL);
    };
    if (task) {
      task.on("state_change", onProgress, onError, onComplete);
    }
  }, [task]);

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
      img: imgURL,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setComposeSatus(COMPOSE_STATE.ERROR);
        console.log("addDeveet Error", err);
      });
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
    const file = event.dataTransfer.files[0];

    const task = uploadImage(file);
    setTask(task);
  };

  const isButtonDisabled =
    message.length === 0 || composeStatus === COMPOSE_STATE.LOADDING;
  return (
    <>
      <Head>
        <title>Compose Deveet | Devtter</title>
      </Head>
      <section className={styles.composeDeveetWrapper}>
        <div className={styles.avatarImg}>
          {user && <Avatar src={user.avatar} />}
        </div>
        <form className={styles.deveetComposeContainer} onSubmit={handleSubmit}>
          <textarea
            className={
              drag === DRAG_IMAGE_STATE.DRAG_OVER
                ? styles.deveetTextareaDrop
                : styles.deveetTextarea
            }
            placeholder="What's going on?"
            value={message}
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          ></textarea>
          {imgURL && (
            <div className={styles.dropImageContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setImgURL(null)}
              >
                x
              </button>
              <img className={styles.dropImage} src={imgURL} />
            </div>
          )}
          <div className={styles.btn}>
            <Botton disabled={isButtonDisabled}>Deveetear</Botton>
          </div>
        </form>
      </section>
    </>
  );
}
