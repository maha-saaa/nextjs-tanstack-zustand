import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import List from "./users-list/users-list";

export default async function HydratedUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <List users={res} />
    </HydrationBoundary>
  );
}
