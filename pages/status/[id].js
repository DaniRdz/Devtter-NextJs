import Deveet from "components/deveet";

export default function DeveetPage(props) {
  return <Deveet {...props} />;
}

DeveetPage.getInitialProps = (context) => {
  const { query, res } = context;
  const { id } = query;
  return fetch(`http://localhost:3000/api/deveets/${id}`).then((apiRes) => {
    if (apiRes.ok) {
      return apiRes.json();
    }
    if (res) {
      res.writeHead(301, { Location: "/home" }).end();
    }
  });
};
