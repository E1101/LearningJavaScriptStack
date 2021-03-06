import gql from "graphql-tag";
export default gql`
  mutation AddComment($issueId: ID!, $body: String!) {
    addComment(input: { subjectId: $issueId, body: $body }) {
      commentEdge {
        cursor
        node {
          id
          bodyHTML
          updatedAt
          author {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;
