import gql from "graphql-tag";
export default gql`
  mutation ReopenIssue($issueId: ID!) {
    reopenIssue(input: { issueId: $issueId }) {
      issue {
        id
        state
      }
    }
  }
`;
