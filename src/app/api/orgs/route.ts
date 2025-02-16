import { createOrg, getOrg } from "@/utils/repository/orgRepository";
import { getUser } from "@/utils/repository/userRepository";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { Organization, User } from "shared";

type Props = Organization;

export const GET = async () => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { message: "You are not authorized to access the Groups API." },
      { status: 403 },
    );
  }
  const result = await getUser(userId);
  if (!result) {
    return NextResponse.json(
      {
        message:
          "Something went wrong retrieving your user data. Please try again later.",
      },
      { status: 400 },
    );
  }
  const org = await getOrg(result.orgId);
  return NextResponse.json(
    { message: org ?? "You are not a part of an organization." },
    { status: org ? 200 : 400 },
  );
};

export const POST = async (request: NextRequest) => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { message: "You are not authorized to access the Groups API." },
      { status: 403 },
    );
  }
  const clerk = await clerkClient();
  const user = await clerk.users.getUser(userId);
  if (!user) {
    return NextResponse.json(
      {
        message:
          "Something went wrong retrieving your user data. Please try again later.",
      },
      { status: 400 },
    );
  }
  if (
    request.headers.get("Content-Type")?.toLowerCase() != "application/json"
  ) {
    return NextResponse.json(
      { message: "Please provide a group data." },
      { status: 400 },
    );
  }

  const data = (await request.json().catch(() => undefined)) as
    | Props
    | undefined;
  if (!data) {
    return NextResponse.json(
      { message: "Please provide group data." },
      { status: 400 },
    );
  }

  const result = await createOrg(data);
  const metadata = user.publicMetadata as User;
  metadata.orgId = data.id;

  return NextResponse.json(
    { message: result ?? "This organization already exists." },
    { status: result ? 200 : 400 },
  );
};
