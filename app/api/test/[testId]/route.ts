import { NextResponse } from "next/server";

type Params = Promise<{ testId: string }>;

export async function POST(request: Request, props: { params: Params }) {
  const userData = await request.json();
  console.log("server user data", userData);
  console.log("server param", (await props.params).testId);

  return NextResponse.json({ message: "사용자가 성공적으로 생성되었습니다." });
}
