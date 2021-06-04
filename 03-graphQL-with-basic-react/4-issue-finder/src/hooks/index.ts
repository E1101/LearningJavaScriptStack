import { useState } from "react";
import { useApolloClient } from "@apollo/client";
import { DocumentNode } from "graphql";

export const useCursorPaginator = () => {
  const [cursors, setCursors] = useState<(string | null)[]>([]);

  return {
    current: cursors[0],
    cursors,
    next: (next: string | null) => {
      setCursors([next, ...cursors]);
    },
    previous: (n = 1) => {
      setCursors(cursors.slice(n));
    },
  };
};

export const useQueryPrefetcher = (query: DocumentNode, options: {}) => {
  const apolloClient = useApolloClient();

  return apolloClient
    .query({
      query,
      ...options,
    })
    .catch((error) => ({ error }))
    .then(console.log);
};
