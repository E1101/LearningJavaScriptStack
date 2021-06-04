import gql from "graphql-tag";
export default gql`
  query GetIssuesMinimalWithPagination(
    $login: String!
    $before: String
    $after: String
  ) {
    user(login: $login) {
      id
      login
      avatarUrl
      issues(
        first: 10
        before: $before
        after: $after
        orderBy: { field: UPDATED_AT, direction: DESC }
        states: [OPEN]
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
        nodes {
          id
          url
          number
          author {
            avatarUrl
            login
          }
          repository {
            nameWithOwner
            url
          }
          title
          bodyHTML
          updatedAt
        }
      }
    }
  }
`;
