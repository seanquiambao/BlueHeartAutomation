import { getOrg } from "@/utils/repository/orgRepository";
import { getUser } from "@/utils/repository/userRepository";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    orgId: string;
  };
};

export const GET = async (request: NextRequest, { params }: Params) => {
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

  let dataRequested = true;
  if (
    request.nextUrl.searchParams.has("data") &&
    !JSON.parse(request.nextUrl.searchParams.get("data") as string)
  ) {
    dataRequested = false;
  }

  if (dataRequested && result.role.toLowerCase() != "administrator") {
    return NextResponse.json(
      { message: "You are not authorized to access another Group's data." },
      { status: 401 },
    );
  }

  const org = await getOrg(params.orgId);
  return NextResponse.json(
    {
      message: dataRequested
        ? (org ?? "This organization does not exist.")
        : org != undefined,
    },
    { status: result ? 200 : 400 },
  );
};
