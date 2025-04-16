import Card from "@/components/Card";
import { Suspense } from "react";

export default async function DashboardPage() {
  const response = await fetch("http://localhost:3000/api/test");
  const data = await response.json();

  console.log("data ", data);
  return (
    <>
      <Suspense fallback={<div>card1 loading중...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card2 loading중...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card3 loading중...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card4 loading중...</div>}>
        <Card />
      </Suspense>
    </>
  );
}
