export default async function Card() {
  const response = await fetch("http://localhost:3000/api/test");
  const data = await response.json();

  console.log("data ", data);

  return (
    <div
      style={{
        width: 200,
        height: 200,
        background: "yellow",
        border: "1px solid #222",
      }}
    />
  );
}
