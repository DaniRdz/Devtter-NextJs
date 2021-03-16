import Link from "next/link";

import TimelineStyle from "../../styles/Timeline.module.css";

export default function Timeline({ userName }) {
  return (
    <div className={TimelineStyle.container}>
      <h1 className={TimelineStyle.title}>
        This is the TimeLine of: {userName}
      </h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}

Timeline.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((res) => {
      const { userName } = res;
      return { userName };
    });
};
