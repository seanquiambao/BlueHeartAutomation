import { clerkClient } from "@clerk/nextjs/server";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { User as UserMetadata } from "shared";
import { db } from "../firebase";

export const getUser = async (
  clerkId: string,
): Promise<UserMetadata | undefined> => {
  const result = await getDocs(
    query(collection(db, "users"), where("clerkId", "==", clerkId), limit(1)),
  );
  if (result.empty) return undefined;
  return result.docs[0].data() as unknown as UserMetadata;
};

export const createUser = async (userId: string) => {
  const clerk = await clerkClient();
  const user = await clerk.users.getUser(userId);
  if (!user) return false;
  if (await getUser(userId)) return false;
  const uuid = crypto.randomUUID();
  const metadata = {
    email: user.primaryEmailAddress?.emailAddress ?? "",
    id: uuid,
    clerkId: user.id,
    name: user.username ?? "",
    role: "user",
    orgId: "",
    icon: user.imageUrl,
  };
  await setDoc(doc(collection(db, "users"), uuid), metadata);
  await clerk.users.updateUser(userId, {
    publicMetadata: metadata,
  });
  return true;
};

export const updateUser = async (metadata: UserMetadata) => {
  if (!(await getUser(metadata.clerkId))) return false;

  const clerk = await clerkClient();
  await clerk.users.updateUser(metadata.clerkId, {
    publicMetadata: metadata,
  });

  await updateDoc(doc(collection(db, "users"), metadata.id), metadata);
  return true;
};
