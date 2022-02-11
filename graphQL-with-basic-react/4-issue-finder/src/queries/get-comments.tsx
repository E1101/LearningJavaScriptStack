import gql from 'graphql-tag';

// As we saw, it might be not desirable in all cases to fetch all data in one go.
// One way of dealing with this is by splitting out comments into a dedicated query.
// With Github, one can fetch comments by repository and issue number:
// In order to integrate this we just need to use the automatically generated
// useGetCommentsQuery inside the response component.
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
