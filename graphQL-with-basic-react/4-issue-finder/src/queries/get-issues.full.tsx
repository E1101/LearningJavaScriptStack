import gql from 'graphql-tag';

// Extending existing queries to fit new requirements (loading comments),
// is by far the simplest approach and should come naturally.
// All we need to do is add comments in our GetIssuesQuery:
// This now fetches the first 10 comments of each of the first 10 open issues.
// This change nests the comments inside our issues and can be accessed by drilling into the issue object.
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
