import { gql, useQuery } from "@apollo/client";

export const FETCH_REPO_QUERY = gql`
  query {
    viewer {
      repositories(first: 100) {
        nodes {
          id
          url
          nameWithOwner
          description
        }
      }
    }
  }
`;

export const useRepoQuery = () => useQuery(FETCH_REPO_QUERY);
