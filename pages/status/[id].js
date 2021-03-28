import Deveet from "components/deveet";

export default function DeveetPage(props) {
  return <Deveet {...props} />;
}
export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;
  const apiRes = await fetch(`http://localhost:3000/api/deveets/${id}`);
  if (apiRes.ok) {
    const props = await apiRes.json();
    return { props };
  }
  if (res) {
    res.writeHead(301, { Location: "/home" }).end();
  }
}
