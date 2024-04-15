export default function Page(props: { data: any }) {
  console.log("props.data", props.data.data);
  return <>{JSON.stringify(props.data.data)}</>;
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
  );
  const data = await res.json();

  return { props: { data } };
}
