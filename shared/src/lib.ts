export type Region = "US" | "Canada";
export type Role = "Administrator" | "User";
export const RoleValues = ["Administrator", "User"];
export type User = {
  clerkId: string;
  id: string;
  email: string;
  name: string;
  icon: string;
  role: Role;
  orgId: string;
};

export type Organization = {
  id: string;
  name: string;
  description: string;
  website: string;
  icon: string;
  media: string[];
  newsletters: string[];
  themes: string[];
  notes: string[];
  users: string[];
  donors: string[];
  region: Region;
};

export type Newsletter = {
  id: string;
  header: string;
  html: string;
  scheduled: number; // epoch date
  media: string[];
  recipients: string[];
};
