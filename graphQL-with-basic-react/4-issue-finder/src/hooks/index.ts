import { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { DocumentNode } from 'graphql';

// Improved Caching during Pagination:
// If you navigate forward, you call issues with {after: endCursor} but if you navigate backwards -
// you call it with {before: startCursor}. Even if both would point to the same data sources,
// Apollo has no way of knowing that they lead to the same results.
//
// If we remember the previous endCursor we can avoid this issue and speedup the backwards pagination.
export const useCursorPaginator = () => {
  const [cursors, setCursors] = useState<(string | null)[]>([]);

  // Note we can just remove the top cursor during backward navigation-
  // as that cursor will be returned by our query again it's the endCursor-
  // of the previous page.
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

// We learned that Apollo caches all queries we send, so how about ensuring that pagination-
// to the next page loaded as soon as the user clicks on next? - we can do this by prefetching-
// the next page.
// All we need to do, is take the apolloClient and execute our query with the next cursor before-
// the user clicks on "Next Page". For simplicity we can do this as soon as the component has-
// been rendered.
export const useQueryPrefetcher = (query: DocumentNode, options: {}) => {
  // useApolloClient to ensure we use the same query that has been passed via <ApolloProvider/>.
  const apolloClient = useApolloClient();

  return apolloClient
    .query({
      query,
      ...options,
    })
    .catch((error) => ({ error }))
    .then(console.log);
};
