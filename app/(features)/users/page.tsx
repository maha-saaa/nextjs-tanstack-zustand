import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/get-query-client";
import List from "../users-list/users-list";

export default async function HydratedUsers() {
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
      <List />
    </HydrationBoundary>
  );
}
