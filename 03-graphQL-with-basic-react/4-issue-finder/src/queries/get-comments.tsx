import gql from "graphql-tag";
export default gql`
  query GetComments(
    $owner: String!
    $name: String!
    $number: Int!
    $after: String
    $first: Int = 5
  ) {
    repository(owner: $owner, name: $name) {
      id
      issue(number: $number) {
        comments(first: $first, after: $after) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
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
`;
