import gql from "graphql-tag";
export default gql`
  query GetIssuesFull($login: String!, $after: String, $commentCount: Int = 1) {
    user(login: $login) {
      id
      issues(
        after: $after
        first: 10
        orderBy: { field: UPDATED_AT, direction: DESC }
        states: [OPEN]
      ) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
        }
        nodes {
          id
          url
          state
          author {
            avatarUrl
            login
          }
          repository {
            id
            nameWithOwner
            url
          }
          number
          title
          bodyHTML
          updatedAt
          viewerDidAuthor
          reactions(first: 10) {
            nodes {
              user {
                avatarUrl
                login
              }
              content
            }
          }
          participants(first: 0) {
            totalCount
          }
          comments(first: $commentCount) {
            totalCount
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              author {
                avatarUrl
                login
              }
              updatedAt
              bodyHTML
            }
          }
        }
      }
    }
  }
`;
