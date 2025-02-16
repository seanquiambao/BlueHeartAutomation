"use client";
import OrganizationForm from "@/components/joinorg";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const orgQuery = useQuery({
    queryKey: ["my-org"],
    queryFn: async () => {
      const resp = await fetch("/api/orgs");
      return {
        status: resp.status,
        data: await resp.json(),
      };
    },
  });
  if (!orgQuery.data) return;
  return (
    <div className="w-full flex">
      {orgQuery.data.status == 400 && <OrganizationForm />}
    </div>
  );
};

export default Page;
