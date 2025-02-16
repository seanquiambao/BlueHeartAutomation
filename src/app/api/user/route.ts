import {
  createUser,
  getUser,
  updateUser,
} from "@/utils/repository/userRepository";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { User } from "shared";

type Props = User;

export const GET = async () => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { message: "You are not authorized to access the Users API." },
      { status: 403 },
    );
  }
  const result = await getUser(userId);
  return NextResponse.json(
    { message: result ?? "Unable to retrieve your user data." },
    { status: result ? 200 : 400 },
  );
};

export const PUT = async () => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { message: "You are not authorized to access the Users API." },
      { status: 403 },
    );
  }
  const result = await createUser(userId);
  return NextResponse.json(
    { message: result ?? "Unable to update your user data." },
    { status: result ? 200 : 400 },
  );
};

export const POST = async (request: NextRequest) => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { message: "You are not authorized to access the Users API." },
      { status: 403 },
    );
  }
  if (
    request.headers.get("Content-Type")?.toLowerCase() != "application/json"
  ) {
    return NextResponse.json(
      { message: "Please provide updated user data." },
      { status: 400 },
    );
  }

  const data = (await request.json().catch(() => undefined)) as
    | Props
    | undefined;
  if (!data) {
    return NextResponse.json(
      { message: "Please provide updated user data." },
      { status: 400 },
    );
  }

  const result = await updateUser(data);
  return NextResponse.json(
    { message: result ?? "Unable to update your user data." },
    { status: result ? 200 : 400 },
  );
};
