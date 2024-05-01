"use client";

import { useQuery } from "@tanstack/react-query";

export default function List({users} : any) {
  // This useQuery was prefetched on the server
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  console.log("data", data);

  // This query was not prefetched on the server and will not start fetching until on the client.
  const { data: otherData } = useQuery({
    queryKey: ["users-2"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  return (
    <section className="flex flex-row min-h-screen w-full justify-center items-start gap-10 p-4 sm:p-20">
      <div className="flex flex-col justify-center items-start">
        <p className="text-xl pb-4">Prefetched on the server</p>
        {data?.map((user: any) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>

      <div className="flex flex-col justify-center items-start pb-4">
        <p className="text-xl">Fetched on the client</p>
        {otherData?.map((user: any) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>

      <div className="flex flex-col justify-center items-start pb-4">
        <p className="text-xl">Fetched directly on server component</p>
        {users?.map((user: any) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </section>
  );
}
