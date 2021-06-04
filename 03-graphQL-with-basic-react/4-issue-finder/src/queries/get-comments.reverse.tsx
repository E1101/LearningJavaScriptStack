import gql from "graphql-tag";
export default gql`
  query GetCommentsReverse(
    $owner: String!
    $name: String!
    $number: Int!
    $before: String
  ) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        comments(last: 2, before: $before) {
          totalCount
          pageInfo {
            hasPreviousPage
            startCursor
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
