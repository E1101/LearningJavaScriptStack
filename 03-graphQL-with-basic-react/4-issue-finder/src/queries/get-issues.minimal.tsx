import gql from "graphql-tag";
export default gql`
  query GetIssuesMinimal($login: String!) {
    user(login: $login) {
      id
      login
      avatarUrl
      issues(
        first: 10
        orderBy: { field: UPDATED_AT, direction: DESC }
        states: [OPEN]
      ) {
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
