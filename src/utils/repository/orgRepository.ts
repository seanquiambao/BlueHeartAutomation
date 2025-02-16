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
import { Organization } from "shared";
import { db } from "../firebase";

export const getOrg = async (
  uuid: string,
): Promise<Organization | undefined> => {
  const result = await getDocs(
    query(collection(db, "orgs"), where("id", "==", uuid), limit(1)),
  );
  if (result.empty) return undefined;
  return result.docs[0].data() as unknown as Organization;
};

export const createOrg = async (org: Organization) => {
  if (await getOrg(org.id)) return false;
  await setDoc(doc(collection(db, "orgs"), org.id), org);
  return true;
};

export const updateOrg = async (org: Organization) => {
  if (!(await getOrg(org.id))) return false;
  await updateDoc(doc(collection(db, "orgs"), org.id), org);
  return true;
};
