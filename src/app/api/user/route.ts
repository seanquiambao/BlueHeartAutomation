import { db } from "@/utils/firebase";
import { auth, clerkClient } from "@clerk/nextjs/server";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import { User } from "shared";

export const GET = async () => {
  const { userId } = await auth();
  // console.log("fetching user")
  if (userId) {
    // console.log("User id found")
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    if (user) {
      return NextResponse.json(
        {
          message: user.publicMetadata,
        },
        { status: 200 },
      );
    }
  }
  return NextResponse.json(
    {
      message: "Unable to fetch user",
    },
    { status: 500 },
  );
};

export const POST = async () => {
  const { userId } = await auth();
  // console.log("fetching user")
  if (userId) {
    // console.log("User id found")
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    if (user) {
      // console.log("User found")
      const queryReq = query(
        collection(db, "users"),
        where("email", "==", user.primaryEmailAddress?.emailAddress),
        limit(1),
      );
      const querySnapshot = await getDocs(queryReq);
      const uuid = crypto.randomUUID();
      // console.log("?")
      let metadata: User;
      if (querySnapshot.empty) {
        metadata = {
          email: user.primaryEmailAddress?.emailAddress ?? "",
          id: uuid,
          name: user.username ?? "",
          role: "user",
          orgId: "",
          icon: "",
        };
        await setDoc(doc(collection(db, "users"), uuid), metadata);
        await clerk.users.updateUser(userId, {
          publicMetadata: metadata,
        });
        // console.log("Set metadata")
      } else {
        metadata = querySnapshot.docs[0].data() as User;
        await clerk.users.updateUser(userId, {
          publicMetadata: metadata,
        });
        // console.log("Fetched metadata")
      }
      return NextResponse.json(
        {
          metadata: metadata,
        },
        {
          status: 200,
        },
      );
    }
    return NextResponse.json(
      {
        message: "Ran into an error fetching user's metadata",
      },
      {
        status: 500,
      },
    );
  }
};
