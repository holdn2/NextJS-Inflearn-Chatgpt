"use client";

import { use } from "react";

type Params = Promise<{ id: string }>;

import React from "react";

export default function Page(props: { params: Params }) {
  const params = use(props.params);
  const handleSubmit = async (e: React.FormEvent) => {
    const response = await fetch("/api/test/1234", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "test name", email: "test email" }),
    });

    const data = await response.json();
    console.log("response data", data);
  };
  return (
    <>
      다이나믹 라우트 페이지 : {params.id}
      <button type="submit" onClick={handleSubmit}>
        전송
      </button>
    </>
  );
}
